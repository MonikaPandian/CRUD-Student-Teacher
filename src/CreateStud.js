import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateStud = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [teacher, setTeacher] = useState("");
    const [batch, setBatch] = useState("");
    const [marks, setMarks] = useState("");

    const navigate = useNavigate();

    return (
        <div>
            <div className="add-user">
                <TextField onChange={(event) => setName(event.target.value)}
                    label="Name" variant="standard" />

                <TextField onChange={(event) => setEmail(event.target.value)}
                    label="Email" variant="standard" />

                <TextField onChange={(event) => setPhone(event.target.value)}
                    label="Phone" variant="standard" />

                <TextField onChange={(event) => setTeacher(event.target.value)}
                    label="Teacher" variant="standard" />

                <TextField onChange={(event) => setBatch(event.target.value)}
                    label="Batch" variant="standard" />

                <TextField onChange={(event) => setMarks(event.target.value)}
                    label="Marks" variant="standard" />
            </div>
             
        <Button className="add-button" onClick={() => {
          const newStudent = {
            name: name,
            email: email,
            phone: phone,
            teacher:teacher,
            batch:batch,
            marks:marks          
          };
        
          fetch("https://62e3c20ab54fc209b8903197.mockapi.io/students",{
            method: "POST",
            body: JSON.stringify(newStudent),
            headers: {
              "Content-Type": "application/json",
            }
          })
          .then((data) => data.json())         
          .then(() => navigate("/students"));                  
        }} 
          variant="contained">Add Student</Button>
        </div>
    )
}

export default CreateStud;
