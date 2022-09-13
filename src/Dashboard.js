import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <div className='dashboard'>
            <div>
            <Button className="student-login" onClick={() => navigate('/list-students')}
                variant="contained">Student Login</Button></div>
            <div>
            <Button className="teacher-login" onClick={() => navigate('/teachers')}
                variant="contained">Teacher Login</Button></div>
        </div>
    )
}

export default Dashboard;
