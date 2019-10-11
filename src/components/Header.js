import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "../css/Header.scss";
import yoonsup from "../imgs/logoImag.png";
import yoonsupProfile from "../imgs/Slice.png";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header_logo">
          <div className="my_photo">
            <img src={yoonsupProfile} alt="profile" />
          </div>
          <span className="header_logo_name">YOONSUP SHIN</span>
          <br />
          <span className="header_logo_job">Developer</span>
          <br />
          <div className="email_phone_section">
            <span className="header_logo_email">
              <i class="fas fa-envelope"></i> imgenius0136@gmail.com
            </span>
            <br />
            <span className="header_logo_phone">
              <i class="fas fa-phone-alt"></i> 01026690136
            </span>
            <br />
          </div>
          <img className="chicken_logo" src={yoonsup} alt="hello"></img>
        </div>
        <nav className="header_container">
          <div className="haeder_menu">
            <ul>
              <Link to="/home">
                <li className="haeder_menu_item">
                  <span>home</span>
                  <span className="span_animation"></span>
                </li>
              </Link>
              <Link to="/profile">
                <li className="haeder_menu_item">
                  <span>profile</span>
                </li>
              </Link>
              <Link to="/detail">
                <li className="haeder_menu_item">
                  <span>detail</span>
                </li>
              </Link>
            </ul>
          </div>
          <div className="copy_container">
            <span className="copy1">@copyright -> Blueprints</span>
            <br></br>
          </div>
        </nav>
      </div>
    );
  }
}

export default withRouter(Header);
