import React, { useState } from "react";
import "./Sorting.scss";

export const Sorting = () => {
  const sortByOptions = [
    { value: "prHtL", label: "price (High to low)" },
    { value: "prLtH", label: "price (Low to high)" },
    { value: "popHtL", label: "popularity(High to low)" },
    { value: "popLtH", label: "popularity(Low to high)" },
  ];
  const sortNumOptions = [
    { value: "48", label: "48" },
    { value: "49", label: "49" },
    { value: "50", label: "50" },
    { value: "51", label: "51" },
  ];

  const [selectedSortBy, setSelectedSortBy] = useState(sortByOptions[0].value);
  const [selectedSortNum, setSelectedSortNum] = useState(sortNumOptions[0].value);

  const getSorting = (e) => {
    if (e.target.name === "sortBy") {
      setSelectedSortBy(e.target.value);
    }
    if (e.target.name === "sortNum") {
      setSelectedSortNum(e.target.value);
    }
  }

  return (
    <form action="" className="sorting__form">
      <select name="sortBy" id="" className="sorting__select-sortBy" onChange={getSorting} value={selectedSortBy}>
        {sortByOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <select name="sortNum" id="" className="sorting__select-sortNum" onChange={getSorting} value={selectedSortNum}>
        {sortNumOptions.map(option => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </form>
  );
}