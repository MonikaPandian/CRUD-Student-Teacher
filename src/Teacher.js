import React from 'react';
import { useEffect, useState } from 'react';

const Teacher = () => {

  const [teachers, setTeachers] = useState([]);
  
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
              </tr>)
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Teacher;
