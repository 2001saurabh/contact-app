import React, { useState, useEffect } from "react";
import AddContact from "./AddContact";
import Header from "./Header";
import { uuid } from "uuidv4";
import "semantic-ui-css/semantic.min.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ContactList from "./ContactList";
import Details from "./Detail";
import history from "./history";
import setting from "./setting";
import help from "./help";
import api from "./../api/contacts";

function App() {
  // const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  //retrive contacts using api request
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact);

    // fetch data
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
    // setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    var Confirm = window.confirm("Contact Removed..");
    if (Confirm === true) {
      setContacts(newContactList);
    }
  };
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retriveContacts();
      if (allContacts) setContacts(allContacts);
    };
    getAllContacts();

    // const retriveContacts = JSON.parse(
    //   localStorage.getItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
    // );
    // if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div
      className="ui fluid container"
      style={{ margin: "auto", border: "6px" }}
    >
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => (
              <ContactList
                {...props}
                contacts={contacts}
                getContactId={removeHandler}
              />
            )}
            // component={() => (
            //   <ContactList contacts={contacts} getContactId={removeHandler} />
            // )}
          />
          <Route
            path="/add"
            exact
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} />
            )}
            // component={() => (
            //   <AddContact addContactHandler={addContactHandler} />
            // )}
          />
          <Route path="/contact/:id" component={Details} exact />
          <Route path="/history" component={history} exact />
          <Route path="/setting" component={setting} exact />
          <Route path="/help" component={help} exact />
        </Switch>

        {/* <AddContact addContactHandler={addContactHandler} />
        <h4 className="ui horizontal divider header">
          <i className="tag icon"></i>
          Contact List
        </h4>
        <Suspense
          fallback={
            <div className="ui active inverted dimmer">
              <div className="ui text loader">Loading</div>
            </div>
          }
        >
          <ContactList contacts={contacts} getContactId={removeHandler} />
        </Suspense> */}
      </Router>
    </div>
  );
}

export default App;
