/** @format */

import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuid } from 'uuid';

function ContactsForm(props) {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length > 0 && phoneNumber.length > 0 && location.length > 0) {
      let newContact = {
        name: name,
        phoneNumber: phoneNumber,
        location: location,
        id: uuid(),
      };

      props.addUser(newContact);
      setName('');
      setPhoneNumber('');
      setLocation('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name of User</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          value={name}
          type="text"
          placeholder="Enter your name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          onChange={handlePhoneNumberChange}
          value={phoneNumber}
          type="number"
          placeholder="Enter Phone Number"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Location</Form.Label>
        <Form.Control
          onChange={handleLocationChange}
          value={location}
          type="text"
          placeholder="Enter Your Location"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ContactsForm;
