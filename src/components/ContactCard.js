import React from "react";
import "semantic-ui-css/semantic.min.css";
import profilePic from "./../assets/profile.jpg";
const ContactCard = (props) => {
  const { id, firstName, email, lastName, message, phone } = props.contact;

  return (
    <div className="ui container ">
      <div className="ui divided items" style={{ paddingBottom: "30px" }}>
        <div className="item">
          <img
            src={profilePic}
            alt="profile"
            className="ui avatar image"
            style={{ height: "60px", width: "60px" }}
          />

          <div className="middle aligned content">
            <div className="header">
              {firstName} {lastName}
            </div>
            <div className="description">
              <div>{email}</div>
              <div>{phone}</div>
              <p>{message}</p>
            </div>
          </div>

          <div className="ui right floated ">
            <button
              className="ui red right labeled icon button"
              onClick={() => props.clickHandler(id)}
            >
              <i className="trash icon"></i>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
