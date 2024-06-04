/** @format */
import Contacts from './Contacts';

function ContactList(props) {
  return (
    <>
      {props.user.map((user) => {
        return (
          <Contacts
            user={user}
            key={user.id}
            editUser={props.editUser}
            deleteUser={props.deleteUser}
          />
        );
      })}
    </>
  );
}

export default ContactList;
