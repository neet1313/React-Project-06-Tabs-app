import React from "react";

const FilterItems = (props) => {
  return (
    <>
      {props.onAppData.map((item, index) => {
        return (
          <button
            type="button"
            key={item.id}
            className={`job-btn ${props.onValue === index && "active-btn"}`}
            onClick={() => {
              props.onValueChange(index);
            }}
          >
            {item.company}
          </button>
        );
      })}
    </>
  );
};

export default FilterItems;
