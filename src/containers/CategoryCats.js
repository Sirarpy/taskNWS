import React from "react";
import { useSelector } from "react-redux";
import "./categoryCats.css";

const CategoryCats = ({ visible }) => {
  let categoryCat = useSelector((state) => state.category.category ?? []);

  const renderCategoryList = categoryCat.slice(0, visible).map((categoryC) => {
    const { id, url } = categoryC;
    return (
      <div className="catsItem" key={id}>
        <img src={url} alt="img" style={{ width: "100%" }} />
      </div>
    );
  });
  return <>{renderCategoryList}</>;
};

export default CategoryCats;
