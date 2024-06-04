/** @format */
// import ContactsForm from './ContactsForm';
// import ContactList from './ContactList';
import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Contacts = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.user.name);
  const [phoneNumber, setphoneNumber] = useState(props.user.phoneNumber);
  const [location, setLocation] = useState(props.user.location);

  const handleModalState = () => {
    setShowModal(!showModal);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setphoneNumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEdit = () => {
    let newDetails = {
      name: name,
      phoneNumber: phoneNumber,
      location: location,
    };
    let mergedDetails = { ...props.user, ...newDetails };

    props.editUser(props.user.id, mergedDetails);
    handleModalState();
  };

  return (
    <div className="card">
      <h1>{props.user.name}</h1>
      <h1>{props.user.phoneNumber}</h1>
      <h1>{props.user.location}</h1>

      <Button onClick={handleModalState}>Edit</Button>
      <Button onClick={() => props.deleteUser(props.user.id)} variant="danger">
        Delete
      </Button>

      <Modal show={showModal} onHide={handleModalState}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name of User</Form.Label>
              <Form.Control
                value={name}
                onChange={handleNameChange}
                type="text"
                placeholder="Enter Your Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                type="number"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Location</Form.Label>
              <Form.Control
                value={location}
                onChange={handleLocationChange}
                type="text"
                placeholder="Enter Your Location"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleModalState} variant="secondary">
            Close
          </Button>
          <Button onClick={handleEdit} variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Contacts;
