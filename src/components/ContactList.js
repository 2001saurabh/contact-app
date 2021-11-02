import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
// import ContactCard from "./ContactCard";
import "semantic-ui-css/semantic.min.css";
const ContactCard = lazy(() => import("./ContactCard"));

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
    <Suspense
      fallback={
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      }
    >
      <div>
        <Link to="/add">
          <div className="ui right aligned container">
            <div class="ui animated inverted blue button" tabindex="0">
              <div class="visible content">Add Contact</div>
              <div class="hidden content">
                <i class="right add icon"></i>
              </div>
            </div>
          </div>

          {/* <div className="ui right aligned container">
            <button className="ui right bottom labeled icon inverted blue button">
              <i className="right add icon"></i>
              Add Contact
            </button>
          </div> */}
        </Link>

        <h4 className="ui horizontal divider header">
          <i className="tag icon"></i>
          Contact List
        </h4>

        <div className="ui celled list">
          {renderContactList.length > 0 ? (
            renderContactList
          ) : (
            <div
              className="ui center aligned header"
              style={{ height: " 40vh" }}
            >
              No Contacts Available
            </div>
          )}
        </div>
      </div>
    </Suspense>
  );
};
export default ContactList;
