import React, { useState } from "react";
import "./inputs.css";
const Form = ({ arr, setArr }) => {
  const [inputValue, setInputValue] = useState("");
  function Add(e) {
    e.preventDefault();
    if (inputValue) {
      const presonName = {
        id: Date.now(),
        Name: inputValue,
      };
      setArr([...arr, presonName]);
      setInputValue("");
    } else {
      window.alert("input is not be empty!!");
    }
  }

  const Clear = () => {
    setArr([]);
  };
  return (
    <div className="form">
      <form onSubmit={Add}>
        <input
          type="text"
          id="name"
          placeholder="enter the name"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value.trim());
          }}
        />
        <button type="submit" id="add">Add</button>
      </form>
      <button onClick={Clear} id="clear">Clear All</button>
    </div>
  );
};

export default Form;
