import React, { Suspense } from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

class AddContact extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    tabIndex: "",
  };

  add = (e) => {
    e.preventDefault();
    if (
      this.state.firstName === "" ||
      this.state.lastName === "" ||
      this.state.email === "" ||
      this.state.phone === "" ||
      this.state.message === "" ||
      this.state.tabIndex === ""
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
      tabIndex: 0,
    });
    alert("Contact Saved");
    this.props.history.push("/");
  };

  render() {
    return (
      <Suspense
        fallback={
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        }
      >
        <Link to="/">
          <div className="ui left aligned container">
            <div class="ui animated inverted blue button" tabindex="0">
              <div class="visible content">Back</div>
              <div class="hidden content">
                <i class="left arrow icon"></i>
              </div>
            </div>
          </div>
        </Link>

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
            {/* <div class="ui placeholder segment">
              <div class="ui icon header">
                <i class="pdf file outline icon"></i>
                No documents are listed for this customer.
              </div>
              <div class="ui primary button">Add Document</div>
            </div> */}

            <div className="field">
              <div className="ui checkbox">
                <input
                  type="checkbox"
                  tabIndex={this.state.tabIndex}
                  onChange={(e) =>
                    this.setState({ tabIndex: e.target.tabIndex })
                  }
                />
                <label>I agree to the Terms and Conditions</label>
              </div>
            </div>

            <button className="ui blue inverted button">Add To Contact</button>

            {/* <div class="ui success message">
            <div class="header">Contact Added Sucessfully</div>
            <p>You've added a contact in your List.</p>
          </div> */}
          </form>
        </div>
      </Suspense>
    );
  }
}

export default AddContact;
