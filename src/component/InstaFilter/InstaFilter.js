import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext } from "react";
import { FilterContext } from "../../App.js";
import { filterValues } from "../../utils.js";

const InstaFilter = () => {
  const { filterClass, setFilterClass } = useContext(FilterContext);
  const handleChange = (e) => setFilterClass(e.target.value);

  return (
    <div>
      <FormControl fullWidth>
        <InputLabel>Filter</InputLabel>
        <Select onChange={handleChange} value={filterClass} label="Filter">
          {filterValues.map((filter) => (
            <MenuItem value={filter.class} key={filter.class}>
              {filter.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default InstaFilter;
