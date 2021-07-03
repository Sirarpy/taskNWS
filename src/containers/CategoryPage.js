import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setCategories } from "../redux/actions/categoryActions";
import CategoryComponent from "./CategoryComponent";

const CategoryPage = () => {
  const dispatch = useDispatch();

  const fetchCategories = async () => {
    const response = await axios
      .get("https://api.thecatapi.com/v1/categories", {
        headers: {
          "x-api-key": "DEMO-API-KEY",
          "Content-Type": "application/json",
        },
      })
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setCategories(response.data));
  };

  useEffect(() => {
    fetchCategories();
  });

  return (
    <div style={{ margin: "10% 5%" }}>
      <CategoryComponent />
    </div>
  );
};

export default CategoryPage;
