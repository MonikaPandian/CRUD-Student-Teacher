import './App.css';
import Student from './Student';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Logout from './Logout';
import CreateStud from './CreateStud';
import EditStud from './EditStud';
import EditList from './EditList';
import DeleteList from './DeleteList';
import DeleteStud from './DeleteStud';
import Teacher from './Teacher';
import CreateTeacher from './CreateTeacher';
import EditListTeach from './EditListTeach';
import EditTeacher from './EditTeacher';
import DeleteListTeach from './DeleteListTeach';
import DeleteTeach from './DeleteTeach';
import Dashboard from './Dashboard';

function App() {
  return (
    <div id="page-top">
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            <Navbar />
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create-student" element={<CreateStud />} />
                <Route path="/edit-student" element={<EditList />} />
                <Route path="/edit-student/:id" element={<EditStud />} />
                <Route path="/list-students" element={<Student />} />
                <Route path="/delete-student" element={<DeleteList />} />
                <Route path="/delete-student/:id" element={<DeleteStud />} />
                <Route path="/teachers" element={<Teacher />} />
                <Route path="/create-teacher" element={<CreateTeacher />} />
                <Route path="/edit-teacher" element={<EditListTeach />} />
                <Route path="/edit-teacher/:id" element={<EditTeacher />} />
                <Route path="/delete-teacher" element={<DeleteListTeach />} />
                <Route path="/delete-teacher/:id" element={<DeleteTeach />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up"></i>
      </a>
      <Logout />
    </div>
  );
}

export default App;
