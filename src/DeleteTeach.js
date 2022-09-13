import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const DeleteTeach = () => {
    
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://62e3c20ab54fc209b8903197.mockapi.io/teachers/${id}`, {
      method: "DELETE",
    })     
      .then(() => navigate("/delete-teacher"));
  }, []);

  return (
    <div>
      
    </div>
  )
}

export default DeleteTeach;
