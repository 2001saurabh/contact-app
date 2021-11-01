import React from "react";
import ContactCard from "./ContactCard";
import "semantic-ui-css/semantic.min.css";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
    );
  });
  return (
    <div>
      <div className="ui celled list">
        {renderContactList.length > 0 ? (
          renderContactList
        ) : (
          <div className="ui center aligned header" style={{ height: " 40vh" }}>
            No Contacts Available
          </div>
        )}
      </div>
    </div>
  );
};
export default ContactList;
