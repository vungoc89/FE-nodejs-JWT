import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useState, useEffect} from 'react';
const ModalUser = (props) => {
    return (
        <>
            <Modal size="lg" show={true} className="modal-user">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span>{props.title}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='content-body row'>
            <div className='col-12 col-sm-6 form-group'>
                <label>Email address*:</label>
                <input className='form-control' type="email"></input>
            </div>
            <div className='col-12 col-sm-6 form-group'>
                <label>Phone number*:</label>
                <input className='form-control' type="text"></input>
            </div>
            <div className='col-12 col-sm-6 form-group'>
                <label>Username:</label>
                <input className='form-control' type="text"></input>
            </div>
            <div className='col-12 col-sm-6 form-group'>
                <label>Password*:</label>
                <input className='form-control' type="password"></input>
            </div>
            <div className='col-12 col-sm-12 form-group'>
                <label>Address:</label>
                <input className='form-control' type="text"></input>
            </div>
            <div className='col-12 col-sm-6 form-group'>
                <label>Gender:</label>
                <select className='form-select'>
                    <option selected value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            
            <div className='col-12 col-sm-6 form-group'>
                <label>Group:</label>
                <select className='form-select'>
                    <option>Dev</option>
                    <option>Leader</option>
                    <option>Custormer</option>
                </select>

            </div>
            
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>Close</Button>
        <Button variant="primary" onClick={props.confirmDeleteUser}>
            Save
          </Button>
      </Modal.Footer>
    </Modal>
        </>
    );
}

export default ModalUser;
