/** @format */

import React from 'react';
import Contacts from './Contacts';

function ContactList(props) {
  return (
    <>
      {props.user.map((user) => {
        return <Contacts user={user} key={user.id} />;
      })}
    </>
  );
}

export default ContactList;
