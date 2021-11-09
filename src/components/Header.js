import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="ui segment" style={{ backgroundColor: "#8050DE" }}>
      <h2 className="ui center aligned  header" style={{ color: "#f2f2f2" }}>
        Contact Manager
      </h2>
      <div className="ui inverted segment">
        <div className="ui large inverted secondary  menu">
          <Link to="/" className="item">
            <i className="home icon" />
            Home
          </Link>

          <Link to="/add" className="item">
            <i className="add icon" />
            Add Contacts
          </Link>

          <div class="ui right  menu">
            <div class="ui category search item">
              <div class="ui transparent icon input">
                <input
                  class="prompt"
                  type="text"
                  placeholder="Search contact..."
                  style={{ width: "600px" }}
                />
                <i class="search link icon"></i>
              </div>
              <div class="results"></div>
            </div>
          </div>

          <div class="right menu">
            <div class="ui simple dropdown item">
              <i class="ellipsis vertical icon"></i>
              <div class="menu">
                <Link class="item" to="/history">
                  Call history
                </Link>
                <Link class="item" to="/setting">
                  Settings
                </Link>
                <Link class="item" to="/help">
                  Help and feedback
                </Link>
              </div>
            </div>
            {/* <div class="ui dropdown item">
              Language <i class="dropdown icon"></i>
              <div class="menu"></div>
            </div> */}
            {/* <div className="ui right aligned container">
              <div class="ui animated inverted blue button" tabindex="0">
                <div class="visible content">Sign Up</div>
                <div class="hidden content">
                  <i class="sign in alternate icon"></i>
                </div>
              </div>
            </div> */}
            {/* <div class="item">
              <div class="ui primary button">Sign Up</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
