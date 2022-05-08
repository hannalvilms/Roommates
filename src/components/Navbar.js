import { useState } from "react";
/* Images */
import Roommates from "../media/Roommates.png";
import Account from "../media/Account.png";
/* Icons */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
/* Components */
import NavbarUser from "./NavbarUser";
import NavbarLanguage from "./NavbarLanguage";
import SearchBar from "./SearchBar";
function Navbar() {
  let [showed, setShowed] = useState("true");
  function toggle(value, setValue) {
    value = !value;
    setValue(value);
  }
  return (
    <div className="navbar">
      <div className="left-side row">
        <div
          id="mobile-menu-btn"
          onClick={() => toggle(showed, setShowed)}
          style={{ position: showed ? "relative" : "fixed" }}
          className={showed ? "" : 'close'}
        >
          <span />
        </div>
        <div className="logo">
          <img alt="Roommates" src={Roommates} />
        </div>
        <img className="account" alt="account" src={Account} />
        <SearchBar />
      </div>
      <div
        className="mobile-menu"
        id="mobile-menu"
        style={{ display: showed ? "none" : "flex" }}
      >
        <a href="/">Places to stay</a>
        <a href="/">Mortgage</a>
        <a href="/">Experiences</a>
        <a href="/">About us</a>
      </div>

      <div className="right-side">
        <div className="frame row">
          <a href="/">Places to stay</a>
          <a href="/" className="active-frame">
            Mortgage
          </a>
          <a href="/">Experiences</a>
          <a href="/">About us</a>
        </div>
        <div className="notif">
          <div className="dot">
            <p>1</p>
          </div>
          <FontAwesomeIcon icon={faBell} />
        </div>
        <hr className="menu-hr" />
        <NavbarUser />
        <NavbarLanguage />
      </div>
    </div>
  );
}

export default Navbar;
