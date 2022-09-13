import React from 'react';
import { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const EditListTeach = () => {

    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate();

    function getTeachers() {
        fetch("https://62e3c20ab54fc209b8903197.mockapi.io/teachers", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((res) => setTeachers(res))
            .catch((e) => console.log(e));
    }

    useEffect(() => getTeachers(), []);

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Batches Assigned</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teach) => {
                        return (
                            <tr>
                                <th scope="row">{teach.id}</th>
                                <td>{teach.name}</td>
                                <td>{teach.email}</td>
                                <td>{teach.phone}</td>
                                <td>{teach.batches}</td>
                                <td><IconButton onClick={() => navigate(`/edit-teacher/${teach.id}`)} color="secondary">
                                        <EditIcon />
                                    </IconButton></td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EditListTeach;
