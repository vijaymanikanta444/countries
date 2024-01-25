import React, { useEffect, useState } from "react";
import "./Input.css";

const Input = ({ placeholder, type, delay = 1000, onChange, value }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    onChange(inputValue);
  };

  useEffect(() => {
    if (value === "") {
      setInputValue("");
    }
  }, [value]);

  return (
    <>
      <input
        className="input"
        type={type}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
      />
    </>
  );
};

export default Input;
