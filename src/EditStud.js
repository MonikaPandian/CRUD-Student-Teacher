import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function EditStud() {
    
    const { id } = useParams();

    const [student, setStudent] = useState("")

    useEffect(() => {
        fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/students/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => setStudent(data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            {student ? <EditStudentForm student={student} /> : "Loading..."}
        </div>
    )
}


function EditStudentForm({ student }) {

    const [name, setName] = useState(student.name);
    const [email, setEmail] = useState(student.email);
    const [phone, setPhone] = useState(student.phone);
    const [teacher, setTeacher] = useState(student.teacher);
    const [batch, setBatch] = useState(student.batch);
    const [marks, setMarks] = useState(student.marks);

    const navigate = useNavigate();


    return (
        <div>
            <div className="add-user">
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" value={name} variant="standard" />

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" value={email} variant="standard" />

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" value={phone} variant="standard" />

                <TextField onChange={(event) => setTeacher(event.target.value)}
                    label="Teacher" value={teacher} variant="standard" />

                <TextField onChange={(event) => setBatch(event.target.value)}
                    label="Batch" value={batch} variant="standard" />

                <TextField onChange={(event) => setMarks(event.target.value)}
                    label="Marks" value={marks} variant="standard" />

            </div>

            <Button className="add-button" onClick={() => {
                const updatedStudent = {
                    name: name,
                    email: email,
                    phone: phone,
                    teacher:teacher,
                    batch:batch,
                    marks:marks
                };

                fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/students/${student.id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedStudent),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())                    
                    .then(() => navigate("/edit-student"));
            }}
                variant="contained">Update</Button>
        </div>
    )
}
