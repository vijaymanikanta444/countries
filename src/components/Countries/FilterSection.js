import React, { useState } from "react";
import "./Countries.css";
import Input from "../../elements/Input";
import Select from "../../elements/Select";
import Button from "../../elements/Button";

const FilterSection = ({
  onShowAllCountriesClick,
  options,
  selectedOption,
  handleInputChange,
  handleSelectChange,
  searchText,
  onClearButtonClick,
}) => {
  return (
    <>
      <div className="filter-section-container">
        <div className="filter-section-left">
          <Input
            placeholder={"Country Name"}
            type="text"
            onChange={handleInputChange}
            value={searchText}
          />
          <Select
            options={options}
            value={selectedOption}
            onChange={handleSelectChange}
            placeholder={"population"}
          />
          <Button type="link" label={"Clear"} onClick={onClearButtonClick} />
        </div>
        <Button
          label={"Show All Countries"}
          onClick={onShowAllCountriesClick}
        />
      </div>
    </>
  );
};

export default FilterSection;
