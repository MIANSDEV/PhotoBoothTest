import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";

const FilterTab = () => {
  const [tabFilter, setTabFilter] = useState("instaFilter");

  const handleChange = (e, newValue) => {
    setTabFilter(newValue);
  };
  return (
    <div>
      <Tabs
        value={tabFilter}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
      >
        <Tab value="instaFilter" label="Instagram Filter" />
        {/* <Tab value="customFilter" label="Custom Filter" /> */}
        <Tab />
      </Tabs>
    </div>
  );
};

export default FilterTab;
