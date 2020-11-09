import React from "react";
import "../css/nav.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="topnav">
      <Link className="link left" to="/">
        Commitments
      </Link>
      <Link className="link right" to="/PendingContracts">
        Pending Contracts
      </Link>
      <Link className="link right" to="/Explore">
        Explore
      </Link>
      <Link className="link right" to="/Dashboard">
        Dashboard
      </Link>
    </div>
  );
}

export default Navbar;
