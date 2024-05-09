import React, { useState } from "react";
import {

  Nav,
  NavItem,
  NavLink,

} from "reactstrap";

function NavBar(args) {
  return (
    <div className="right">
      <Nav card>
        <NavItem>
          <NavLink active href="/">
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink active href="/quiz">
            Quiz
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;
