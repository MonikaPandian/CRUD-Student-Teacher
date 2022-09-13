import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTeacher = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [batches, setBatches] = useState("");

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

                <TextField onChange={(event) => setBatches(event.target.value)}
                    label="Batches" variant="standard" />

            </div>

            <Button className="add-button" onClick={() => {
                const newTeacher = {
                    name: name,
                    email: email,
                    phone: phone,
                    batches: batches,
                };

                fetch("https://62e3c20ab54fc209b8903197.mockapi.io/teachers", {
                    method: "POST",
                    body: JSON.stringify(newTeacher),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                    .then((data) => data.json())
                    .then(() => navigate("/teachers"));
            }}
                variant="contained">Add Teacher</Button>
        </div>
    )
}

export default CreateTeacher;
