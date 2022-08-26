import React from "react";
import "./Sidebar.css";

function Sidebar() {
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }

  return (
    <div className="sidebar">
      <nav>
        <ul>
          {/* <li><a href="#">Metadata</a></li>
            <li><a href="#">Title</a></li>
            <li><a href="#">Revision History</a></li>
            <li><a href="#">Document Identifications</a></li>
            <li><a href="#">Roles</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Parties</a></li>
            <li><a href="#">Responsible Parties</a></li>
          <li><a href="#">Import Profile</a></li>
            <li><a href="#">Import Profile</a></li>
          <li><a href="#">System Characteristics</a></li>
            <li><a href="#">System Identification</a></li>
            <li><a href="#">System Information Types</a></li>
            <li><a href="#">Security Impact Levels</a></li>
            <li><a href="#">Authorization Boundary & Data Flow</a></li>

          <li><a href="#">System Implementation</a></li>
          <li><a href="#">Users</a></li>
          <li><a href="#">Components</a></li>
          <li><a href="#">Implemented Components</a></li>
          <li><a href="#">System Inventory</a></li>
          <li><a href="#">Remarks</a></li>

          <li><a href="#">Control Implementation</a></li>
          <li><a href="#">Controls</a></li> */}

          <li>
            <button class="collapse__button">Back Matter</button>
          </li>
          <div className="content">
            <a href="#">Citations</a>
            <a href="#">Resources</a>
          </div>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;

// drop down toggling sidebar

// metadata, import profile, system characteristics, system implementation, control implementation, back matter
