import React, { useContext, useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import AddProject from './AddProject';
import { deleteProjectAPI, userProjectAPI } from '../Services/allAPI';
import { addProjectResponseContext, editProjectResponsContext } from '../Contexts/ContextShare';
import EditProject from './EditProject';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// New DeleteConfirmationModal component
function DeleteConfirmationModal({ show, handleClose, handleConfirmDelete }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Delete</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this project?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
          Confirm Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function MyProjects() {
  const { addProjectRespon, setAddProjectResponse } = useContext(addProjectResponseContext);
  const { editProjectRespons, setEditProjectResponse } = useContext(editProjectResponsContext);
  const [userProjects, setUserProjects] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [projectToDelete, setProjectToDelete] = useState(null);

  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      const result = await userProjectAPI(reqHeader);
      if (result.status === 200) {
        setUserProjects(result.data);
      } else {
        toast.warning(result.response.data);
      }
    }
  };

  const handleDelete = (id) => {
    setProjectToDelete(id);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (projectToDelete) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      };
      const result = await deleteProjectAPI(projectToDelete, reqHeader);
      if (result.status === 200) {
        // page reload
        getUserProjects();
        toast.success("Project deleted successfully");
      } else {
        toast.error(result.response.data);
      }
    }
    setShowDeleteModal(false);
    setProjectToDelete(null);
  };

  useEffect(() => {
    getUserProjects();
  }, [addProjectRespon, editProjectRespons]);

  return (
    <>
      <div className='card shadow p-2 mb-3'>
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-md-center'>
          <h3 className='mb-3 mb-md-0'>My Projects</h3>
          <div className='ms-md-auto'>
            <AddProject />
          </div>
        </div>

        <div className='mt-3'>
          {userProjects?.length > 0 ? userProjects.map(Project => (
            <div key={Project._id} className='border d-flex flex-column flex-md-row align-items-md-center rounded p-2 mt-3'>
              <h5 className='mb-3 mb-md-0'>{Project?.title}</h5>
              <div className='icon ms-md-auto d-flex mt-2'>
                <EditProject Project={Project} />
                <a href={`${Project.github}`} target='_blank' className='btn me-2 me-md-0'><i className="fa-brands fa-github fa-2x"></i></a>
                <button onClick={() => handleDelete(Project._id)} className='btn'><i className="fa-solid fa-trash fa-2x"></i></button>
              </div>
            </div>
          )) :
            <p className='text-danger fw-bolder fs-5'>No Projects Uploaded yet</p>}
        </div>
        <ToastContainer position='top-right' autoClose={2000} theme='colored' />
      </div>

      {/* Render the DeleteConfirmationModal component */}
      <DeleteConfirmationModal
        show={showDeleteModal}
        handleClose={() => setShowDeleteModal(false)}
        handleConfirmDelete={handleConfirmDelete}
      />
    </>
  );
}

export default MyProjects;
