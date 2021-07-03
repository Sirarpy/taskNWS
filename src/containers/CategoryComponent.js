import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const categoryItems = {
  marginBottom: "1rem",
  padding: " 2rem 1rem",
  backgroundColor: "#cacaca85",
  width: "30%",
  textAlign: "center",
  borderRadius: "15px",
  textTransform: "uppercase",
  boxShadow: "4px 3px 18px 0 rgb(35 8 10 / 15%)",
};

const CategoryComponent = () => {
  const categories = useSelector(
    (state) => state.allCategories.categories ?? []
  );
  const renderList = categories.map((category) => {
    const { id, name } = category;
    return (
      <div style={categoryItems} key={id}>
        <Link to={`category/${name}/${id}`} style={{ color: "black" }}>
          <div className="">{name}</div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default CategoryComponent;
