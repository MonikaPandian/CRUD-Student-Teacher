import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteStud = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/students/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-student"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteStud;
