// import Input from "./elements/Input";
import CountriesComponents from "./components/Countries";
// import Select from "./elements/Select";
// import { useState } from "react";

function App() {
  // const [selectedOption, setSelectedOption] = useState("");

  // const handleSelectChange = (value) => {
  //   setSelectedOption(value);
  //   // You can perform additional actions here based on the selected value
  // };

  // const options = [
  //   { value: "option1", label: "Option 1" },
  //   { value: "option2", label: "Option 2" },
  //   { value: "option3", label: "Option 3" },
  // ];

  // const handleInputChange = (value) => {
  //   // Handle the input value with a debounce
  //   console.log("Input value:", value);
  // };
  return (
    <div>
      <CountriesComponents />

      {/* <Button
        label={"Show All Countries"}
        onClick={() => console.log("btn-clicked")}
      /> */}

      {/* <Input
        placeholder={"Country Name"}
        type="text"
        onChange={handleInputChange}
      /> */}

      {/* <Select
        options={options}
        value={selectedOption}
        onChange={handleSelectChange}
        placeholder={"population"}
      /> */}
    </div>
  );
}

export default App;
