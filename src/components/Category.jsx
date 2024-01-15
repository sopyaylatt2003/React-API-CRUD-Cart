import React from "react";

const Category = ({ categoryName }) => {
  return (
    <button className="category-btn whitespace-nowrap border border-neutral-600 px-4 py-1">
      {categoryName}
    </button>
  );
};

export default Category;
