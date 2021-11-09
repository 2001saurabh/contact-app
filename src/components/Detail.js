import React from "react";
import "semantic-ui-css/semantic.min.css";
import profilePic from "./../assets/profile.jpg";
import { Link } from "react-router-dom";

const Details = (props) => {
  const { firstName, email, lastName, message, phone } =
    props.location.state.contact;

  const handleCall = () => {
    window.confirm(" calling......");
  };

  return (
    <div className="main">
      <h3 className="ui horizontal divider header">
        <i className="address book icon"></i>
        Contact Details
      </h3>
      <div className="ui left aligned container">
        <Link to="/">
          <div className="ui animated inverted blue button" tabIndex="0">
            <div className="visible content">Back</div>
            <div className="hidden content">
              <i className="left arrow icon"></i>
            </div>
          </div>
        </Link>
      </div>
      <div className="ui centered card">
        <div className="image">
          <img src={profilePic} alt="user" />
        </div>

        <div className=" ui content">
          <div className="ui header">
            <i className="user circle outline icon" />
            {firstName} {lastName}
          </div>
          <div className="description">
            <i className="envelope outline icon" />
            {email}
          </div>
          <div className="description">
            <i className="call icon" />
            {phone}
          </div>
          <div className="description">
            <i className="open envelope icon" />
            {message}
          </div>
          <div className="ui center aligned container">
            <button
              className="ui animated inverted green button"
              onClick={() => handleCall()}
            >
              <div className="visible content">Call</div>

              <div className="hidden content">
                <i className="call icon"></i>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
