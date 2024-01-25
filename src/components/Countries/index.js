import React, { useEffect, useState } from "react";
import TableComponent from "../TableComponent";
import "./Countries.css";
import FilterSection from "./FilterSection";

import axios from "axios";

const CountriesComponents = () => {
  const [data, setData] = useState([
    {
      code: "",
      capital: "",
      name: "",
      phCode: "",
      population: "",
      flag: "",
      emblem: "",
    },
  ]);

  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const onClearButtonClick = () => {
    setSearchText("");
    setSelectedOption("");
  };

  const options = [
    { value: "1000000", label: "< 1M" },
    { value: "5000000", label: "< 5M" },
    { value: "10000000", label: "< 10M" },
  ];

  const onShowAllCountriesClick = () => {
    const apiUrl = "https://api.sampleapis.com/countries/countries";

    axios
      .get(apiUrl)
      .then((response) => {
        // Handle successful response
        const updatedList = response.data.map((item) => ({
          code: item.abbreviation,
          capital: item.capital,
          name: item.name,
          phCode: item.phone,
          population: item.population,
          flag: item.media.flag,
          emblem: item.media.emblem,
        }));
        setData(updatedList);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching data:", error);
      });
  };

  const handleInputChange = (value) => {
    setSearchText(value);
  };

  const handleSelectChange = (value) => {
    setSelectedOption(value);
  };

  const getSearchResult = (list) => {
    if (searchText !== "") {
      return list.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return list;
    }
  };

  const getPopulationResult = (list) => {
    if (selectedOption !== "") {
      const updatedList = list.filter(
        (item) => Number(item.population) < Number(selectedOption)
      );
      return updatedList;
    } else {
      return list;
    }
  };

  const getFilteredData = () => {
    const initialData = [...data];
    const searchResult = getSearchResult(initialData);
    const populationResult = getPopulationResult(searchResult);

    return populationResult;
  };

  return (
    <>
      <div className="countries-component-container">
        <h4>Countries Info</h4>
        <FilterSection
          onShowAllCountriesClick={onShowAllCountriesClick}
          options={options}
          searchText={searchText}
          selectedOption={selectedOption}
          handleInputChange={handleInputChange}
          handleSelectChange={handleSelectChange}
          onClearButtonClick={onClearButtonClick}
        />
        <TableComponent countriesData={getFilteredData()} />
      </div>
    </>
  );
};

export default CountriesComponents;
