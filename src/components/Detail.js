import React from "react";
import "semantic-ui-css/semantic.min.css";
import profilePic from "./../assets/profile.jpg";
import { Link } from "react-router-dom";
const Details = (props) => {
  const { firstName, email, lastName, message, phone } =
    props.location.state.contact;
  console.log(props);
  return (
    <div className="main">
      <h3 className="ui horizontal divider header">
        <i className="address book icon"></i>
        Contact Details
      </h3>
      <div className="ui centered card">
        <div className="image">
          <img src={profilePic} alt="user" />
        </div>
        <div className=" ui content">
          <div className="ui header">
            {firstName} {lastName}
          </div>
          <div className="description">{email}</div>
          <div className="description">{phone}</div>
          <div className="description">{message}</div>
        </div>
      </div>
      <Link to="/">
        <div className="ui center aligned container">
          <div class="ui animated inverted blue button" tabindex="0">
            <div class="visible content">Back</div>
            <div class="hidden content">
              <i class="left arrow icon"></i>
            </div>
          </div>
        </div>
      </Link>
      <div className="ui center aligned container" style={{ margin: "10px" }}>
        <div class="ui animated inverted blue button" tabindex="0">
          <div class="visible content">Call</div>
          <div class="hidden content">
            <i class="call icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
