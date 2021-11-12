import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

class EditContact extends React.Component {
  // state = {
  //   firstName: "",
  //   lastName: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  //   tabIndex: "",
  // };
  constructor(props) {
    super(props);
    const { id, firstName, lastName, phone, message, email } =
      props.location.state.contact;
    this.state = {
      id: id,
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      message: message,
    };
  }

  update = (e) => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.message === ""
    ) {
      alert("All the fields are mandatory");
      return;
    }
    this.props.editContactHandler(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    });
    alert("Contact Updated");
    this.props.history.push("/");
  };

  render() {
    return (
      <>
        <h3 className="ui horizontal divider header">
          <i className="edit  icon"></i>
          Edit Contact
        </h3>
        <Link to="/">
          <div className="ui left aligned container">
            <div className="ui animated inverted blue button" tabindex="0">
              <div className="visible content">Back</div>
              <div className="hidden content">
                <i className="left arrow icon"></i>
              </div>
            </div>
          </div>
        </Link>

        <div className="ui left aligned container">
          <form className="ui form success" onSubmit={this.update}>
            <div className="field">
              <label>First Name</label>
              <input
                placeholder="First Name"
                type="text"
                name="firstame"
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Last Name</label>
              <input
                placeholder="Last Name"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Phone No :</label>
              <input
                placeholder="Phone No"
                type="text"
                name="Phone"
                value={this.state.phone}
                onChange={(e) => this.setState({ phone: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email Id</label>
              <input
                placeholder="Email"
                type="text"
                name="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="ui  container ">
              <div className="field">
                <label>Address</label>
                <textarea
                  rows="4"
                  placeholder="Type your Message..."
                  type="text"
                  name="message"
                  style={{ marginBottom: "10px" }}
                  value={this.state.message}
                  onChange={(e) => this.setState({ message: e.target.value })}
                ></textarea>
              </div>
            </div>
            {/* <div class="ui placeholder segment">
              <div class="ui icon header">
                <i class="pdf file outline icon"></i>
                No documents are listed for this customer.
              </div>
              <div class="ui primary button">Add Document</div>
            </div> */}

            <button className="ui blue inverted button">Update Contact</button>

            {/* <div class="ui success message">
            <div class="header">Contact Added Sucessfully</div>
            <p>You've added a contact in your List.</p>
          </div> */}
          </form>
        </div>
      </>
    );
  }
}

export default EditContact;
