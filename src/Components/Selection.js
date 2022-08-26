import React from "react";
import "./Selection.css";
import { useState } from "react";

function Selection() {

    const [state, setState] = useState({
        systemChosen: "",
    })

    const handleChange = e => {
        setState(e.target.value)
      }

  return (
    <div className="system__form">
      <form>
        <label>
          Please select a system:
          <select
            name="systemChosen"
            value={state.carBrand}
            onChange={handleChange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
      </form>
    </div>
  );
}

export default Selection;
