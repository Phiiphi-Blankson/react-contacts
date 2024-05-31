/** @format */

import { useState } from 'react';
import ContactList from './components/ContactList';
import ContactsForm from './components/ContactsForm';
import { v4 as uuid } from 'uuid';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [user, setUser] = useState([
    {
      name: 'Sadik',
      phoneNumber: '0302395449',
      location: 'Kuntunse',
      id: uuid(),
    },
    { name: 'Smile', phoneNumber: '0302678779', location: 'Kpone', id: uuid() },
    {
      name: 'Suzy',
      phoneNumber: '0309098976',
      location: 'Kolegornor',
      id: uuid(),
    },
    {
      name: 'Samuel',
      phoneNumber: '0446576689',
      location: 'Kantamanto',
      id: uuid(),
    },
    {
      name: 'Samson',
      phoneNumber: '9889776785',
      location: 'Kokompe',
      id: uuid(),
    },
    {
      name: 'Sophia',
      phoneNumber: '4644578899',
      location: 'Kasoa',
      id: uuid(),
    },
  ]);

  const addNewUser = (newUser) => {
    setUser([...user, newUser]);
  };
  // addNewUser({ name: 'Sadik', phoneNumber: '0302395449' });
  return (
    <Container>
      <Row>
        <Col>
          <ContactsForm addUser={addNewUser} />
        </Col>
        <Col>
          <ContactList user={user} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
