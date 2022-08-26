import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        Metadata
        <li>Title</li>
        <li>Revision History</li>
        <li>Document Identifications</li>
        <li>Roles</li>
        <li>Locations</li>
        <li>Parties</li>
        <li>Responsible Parties</li>
      </ul>
      <ul>
        Import Profile
        <li>Import Profile</li>
      </ul>
      <ul>
        System Characteristics
        <li>System Identification</li>
        <li>System Information Types</li>
        <li>Security Impact Levels</li>
        <li>Authorization Boundary & Data Flow</li>
      </ul>
      <ul>
        System Implementation
        <li>Users</li>
        <li>Components</li>
        <li>Implemented Components</li>
        <li>System Inventory</li>
        <li>Remarks</li>
      </ul>
      <ul>
        Control Implementation
        <li>Controls</li>
      </ul>
      <ul>
        Back Matter
        <li>Citations</li>
        <li>Resources</li>
      </ul>
    </nav>
  );
}

export default Sidebar;

// drop down toggling sidebar

// metadata, import profile, system characteristics, system implementation, control implementation, back matter
