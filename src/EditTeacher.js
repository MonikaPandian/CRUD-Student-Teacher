import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function EditTeacher() {
    
    const { id } = useParams();

    const [teacher, setTeacher] = useState("")

    useEffect(() => {
        fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/teachers/${id}`, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTeacher(res))
            .catch((e) => console.log(e))
    }, []);

    return (
        <div>
            {teacher ? <EditTeacherForm teacher={teacher} /> : "Loading..."}
        </div>
    )
}


function EditTeacherForm({ teacher }) {

    const [name, setName] = useState(teacher.name);
    const [email, setEmail] = useState(teacher.email);
    const [phone, setPhone] = useState(teacher.phone);
    const [batches, setBatches] = useState(teacher.batches);
   

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

                <TextField onChange={(event) => setBatches(event.target.value)}
                    label="Batches" value={batches} variant="standard" />

            </div>

            <Button className="add-button" onClick={() => {
                const updatedTeacher = {
                    name: name,
                    email: email,
                    phone: phone,
                    batches:batches                   
                };

                fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/teachers/${teacher.id}`, {
                    method: "PUT",
                    body: JSON.stringify(updatedTeacher),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())                    
                    .then(() => navigate("/edit-teacher"));
            }}
                variant="contained">Update</Button>
        </div>
    )
}
