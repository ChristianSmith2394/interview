import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#">Metadata</a>
          </li>
          <ul>
            <a href="#">Title</a>
          </ul>
          <ul>
            <a href="#">Revision History</a>
          </ul>
          <ul>
            <a href="#">Document Identifications</a>
          </ul>
          <ul>
            <a href="#">Roles</a>
          </ul>
          <ul>
            <a href="#">Locations</a>
          </ul>
          <ul>
            <a href="#">Parties</a>
          </ul>
          <ul>
            <a href="#">Responsible Parties</a>
          </ul>
          <li>
            <a href="#">Import Profile</a>
          </li>
          <ul>
            <a href="#">Import Profile</a>
          </ul>
          <li>
            <a href="#">System Characteristics</a>
          </li>
          <ul>
            <a href="#">System Identification</a>
          </ul>
          <ul>
            <a href="#">System Information Types</a>
          </ul>
          <ul>
            <a href="#">Security Impact Levels</a>
          </ul>
          <ul>
            <a href="#">Authorization Boundary & Data Flow</a>
          </ul>

          <li>
            <a href="#">System Implementation</a>
          </li>
          <ul>
            <a href="#">Users</a>
          </ul>
          <ul>
            <a href="#">Components</a>
          </ul>
          <ul>
            <a href="#">Implemented Components</a>
          </ul>
          <ul>
            <a href="#">System Inventory</a>
          </ul>
          <ul>
            <a href="#">Remarks</a>
          </ul>

          <li>
            <a href="#">Control Implementation</a>
          </li>
          <ul>
            <a href="#">Controls</a>
          </ul>

          <li>
            <a href="#">Back Matter</a>
          </li>

          <ul>
            <a href="#">Citations</a>
          </ul>
          <ul>
            <a href="#">Resources</a>
          </ul>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

// drop down toggling sidebar

// metadata, import profile, system characteristics, system implementation, control implementation, back matter
