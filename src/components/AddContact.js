import React from "react";
import "semantic-ui-css/semantic.min.css";

class AddContact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  };

  add = (e) => {
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
    this.props.addContactHandler(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      phone: "",
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="ui left aligned container">
        <form className="ui form success" onSubmit={this.add}>
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
              <label>Message</label>
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

          <div className="field">
            <div className="ui checkbox">
              <input type="checkbox" readonly="" tabindex="0" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button className="ui blue inverted button">Add To Contact</button>

          {/* <div class="ui success message">
            <div class="header">Contact Added Sucessfully</div>
            <p>You've added a contact in your List.</p>
          </div> */}

          {/* <button type="submit" class="ui button blue">
            Add To Contact
          </button> */}
        </form>
      </div>
    );
  }
}

export default AddContact;
