import React from "react";

export const Filter = (props) => {
  let filterData = props.filterData;
  let category = props.category;
  let setCategory = props.setCategory;

  // filterHnadler
  function filterHandler(title) {
    setCategory(title);
  }
  return (
    <div className="filter-button-box">
      {filterData.map((data) => {
        return (
          <button
            className="filter-button"
            key={data.id}
            onClick={() => filterHandler(data.title)}
            style={{
              border: category === data.title ? "2px solid white" : "none",
            }}
          >
            {data.title}
          </button>
        );
      })}
    </div>
  );
};
