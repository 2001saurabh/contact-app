import React from "react";
import "semantic-ui-css/semantic.min.css";
import profilePic from "./../assets/profile.jpg";
import { Link } from "react-router-dom";
const ContactCard = (props) => {
  const { id, firstName, lastName, phone } = props.contact;

  return (
    <div className="ui container ">
      <div className="ui divided items" style={{ paddingBottom: "30px" }}>
        <div className="item">
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: props.contact },
            }}
          >
            <img
              src={profilePic}
              alt="profile"
              className="ui avatar image"
              style={{ height: "60px", width: "60px" }}
            />
          </Link>

          <div className="ui middle aligned content">
            <Link
              to={{
                pathname: `/contact/${id}`,
                state: { contact: props.contact },
              }}
            >
              <div className="ui header">
                {firstName} {lastName}
              </div>
            </Link>

            <div className="ui description">
              <Link
                to={{
                  pathname: `/contact/${id}`,
                  state: { contact: props.contact },
                }}
              >
                <div>{phone}</div>
              </Link>
            </div>
          </div>

          <div className="ui right floated ">
            <Link
              to={{
                pathname: `/edit`,
                state: { contact: props.contact },
              }}
            >
              <button
                className="ui blue right labeled icon button"
                style={{ margin: "10px" }}
              >
                <i className="edit alternate outline icon"></i>
                Edit
              </button>
            </Link>

            <button
              className="ui red right labeled icon button"
              onClick={() => props.clickHandler(id)}
            >
              <i className="trash alternate outline icon"></i>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
