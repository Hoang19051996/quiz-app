import React, { useState } from 'react';
import quizImg from "../assets/goquiz.png"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { color } from '@mui/system';

function Example(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div >
      <Navbar expand="md" {...args} >
        <NavbarBrand href="/"> <img src={quizImg } width={"100%"} /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/quiz" style={{color:"#7c89f1", fontSize:"20px"}}>Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color:"#7c89f1",fontSize:"20px"}}>
             Contact
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret style={{ color:"#7c89f1",fontSize:"20px"}}>
             Topic
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Javascript</DropdownItem>
                <DropdownItem>React JS</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Css</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText style={{color:"#7c89f1", fontSize:"20px"}}>Log in / Sign up</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;