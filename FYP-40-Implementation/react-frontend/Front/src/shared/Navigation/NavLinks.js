import React from 'react';
import { NavLink, } from 'react-router-dom';
 import { Dropdown,DropdownButton,NavDropdown } from 'react-bootstrap';

import './NavLinks.css';

const NavLinks = props => {
  return <ul className="nav-links">
    <li>
      <NavLink to="/About" exact>About Us</NavLink>
    </li>
    <li>
      <NavLink to="/LoginCMS">Case Mangament System</NavLink>
    </li>
    <li>
      <NavLink to="/places/new">DashBoard</NavLink>
      {/* <DropdownButton id="dropdown-basic-button" title="Dashboard">
  <Dropdown.Item to="/Judge/Login">JudgeDashborad</Dropdown.Item>
  <Dropdown.Item to="/Lawyer/Login">LawyerDashborad</Dropdown.Item>
</DropdownButton> */}
    </li>
    <li>
      <NavLink to="/EFilling">E-Filling</NavLink>
    </li>
    <li>
      {/* <NavLink to="/Search">Search case</NavLink> */}
      <NavDropdown  title="Search case" id="basic-nav-dropdown">
        <NavDropdown.Item style={{'color':'black'}} href="/CauseListSearch">Cause List Search</NavDropdown.Item>
        <NavDropdown.Item style={{'color':'black'}} href="/JudgmentSerach">Judgment Search</NavDropdown.Item>
        <NavDropdown.Item style={{'color':'black'}} href="/OnlineCaseStatus">online case status</NavDropdown.Item>
        <NavDropdown.Item style={{'color':'black'}} href="/LatestJudgments">Latest Judgments</NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
    {/* <NavLink to="/Notification">Send Notification</NavLink> */}
    <NavDropdown  title="Send Notification" id="basic-nav-dropdown">
    <NavDropdown.Item style={{'color':'black'}} href="/Notification">Send Notification</NavDropdown.Item>
    <NavDropdown.Item style={{'color':'black'}} href="/ViewNotification">View Calendar</NavDropdown.Item>

      </NavDropdown>
    </li>
    <li>
      <NavLink to="/StaticReport">Statistics & Reports</NavLink>
    </li>
    {/* <li>
      <NavLink to="/">AdminLogin</NavLink>
    </li> */}
    
  </ul>
};

export default NavLinks;