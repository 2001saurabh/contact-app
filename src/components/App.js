import React, { useState, useEffect, lazy, Suspense } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import { uuid } from "uuidv4";
import "semantic-ui-css/semantic.min.css";

const ContactList = lazy(() => import("./ContactList"));

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };
  useEffect(() => {
    const retriveContacts = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    );
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      className="ui fluid container"
      style={{ margin: "auto", border: "6px" }}
    >
      <div className="App">
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <h4 className="ui horizontal divider header">
          <i className="tag icon"></i>
          Contact List
        </h4>
        <Suspense
          fallback={
            <div class="ui active inverted dimmer">
              <div class="ui text loader">Loading</div>
            </div>
          }
        >
          <ContactList contacts={contacts} getContactId={removeHandler} />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
