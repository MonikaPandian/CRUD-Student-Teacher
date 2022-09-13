import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();

    return (
         
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
         <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <a className="nav-link" onClick={() => navigate("/dashboard")}>
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
            Interface
        </div>

        {/* <!-- Nav Item - Student Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <img style={{height:"50px",width:"50px"}} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-student-online-learning-kiranshastry-lineal-kiranshastry-3.png"/>&nbsp;&nbsp;
                <span>Student</span>
            </a>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Student</h6>
                    <a className="collapse-item"  onClick={() => navigate("/create-student")}>Create Student</a>
                    <a className="collapse-item"  onClick={() => navigate("/list-students")}>List Students</a>
                    <a className="collapse-item"  onClick={() => navigate("/edit-student")}>Edit Student</a>
                    <a className="collapse-item"  onClick={() => navigate("/delete-student")}>Delete Student</a>
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Teacher Collapse Menu --> */}
        <li className="nav-item">
            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTeacher"
                aria-expanded="true" aria-controls="collapseUtilities">               
                <span><img style={{height:"50px",width:"50px"}} src="https://img.icons8.com/ios/50/000000/teacher.png"/>&nbsp;&nbsp;Teacher</span>
            </a>
            <div id="collapseTeacher" className="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Teacher</h6>
                    <a className="collapse-item" onClick={() => navigate("/create-teacher")} >Create Teacher</a>
                    <a className="collapse-item" onClick={() => navigate("/teachers")}>List Teachers</a>
                    <a className="collapse-item" onClick={() => navigate("/edit-teacher")}>Edit Teacher</a>
                    <a className="collapse-item" onClick={() => navigate("/delete-teacher")}>Delete Teacher</a>
                </div>
            </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
            <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>                                            
    </ul>                       
        //  {/* <!-- End of Sidebar --> */}
    )
}

export default Sidebar;
