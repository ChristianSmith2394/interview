import React from "react";
import "./Sidebar.css";
import { useState } from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <a href="#">Metadata</a>
            <li>Title</li>
            <li>Revision History</li>
            <li>Document Identifications</li>
            <li>Roles</li>
            <li>Locations</li>
            <li>Parties</li>
            <li>Responsible Parties</li>
        </ul>
        <ul>
          <a href="#">Import Profile</a>
            <li>Import Profile</li>
        </ul>
        <ul>
          <a href="#">System Characteristics</a>
            <li>System Identification</li>
            <li>System Information Types</li>
            <li>Security Impact Levels</li>
            <li>Authorization Boundary & Data Flow</li>
        </ul>
        <ul>
          <a href="#">System Implementation</a>
          <li>Users</li>
          <li>Components</li>
          <li>Implemented Components</li>
          <li>System Inventory</li>
          <li>Remarks</li>
        </ul>
        <ul>
          <a href="#">Control Implementation</a>
          <li>Controls</li>
        </ul>
        <ul>
          <a href="#">Back Matter</a>
          <li>Citations</li>
          <li>Resources</li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

// drop down toggling sidebar

// metadata, import profile, system characteristics, system implementation, control implementation, back matter
