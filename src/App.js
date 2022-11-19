import React from "react";
import { createContext, useState } from "react";
import ImageFilter from "./component/ImageFilter/ImageFilter";
export const FilterContext = createContext();

function App() {
  const [filterClass, setFilterClass] = useState("");
  const value = {
    filterClass,
    setFilterClass,
  };
  return (
    <FilterContext.Provider value={value}>
      <ImageFilter />
    </FilterContext.Provider>
  );
}

export default App;
