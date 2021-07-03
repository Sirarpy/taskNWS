import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { selectedCategory } from "../redux/actions/categoryActions";
import CategoryCats from "./CategoryCats";

const itemsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  margin: "10%",
  justifyContent: "space-between",
};

const button = {
  margin: " 50px auto",
  display: "block",
  cursor: "pointer",
  border: "none",
  outline: "mone",
  padding: "10px 15px",
};

const CategoryDetails = () => {
  const dispatch = useDispatch();
  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(
        `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`,
        {
          headers: {
            "x-api-key": "DEMO-API-KEY",
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        console.log("Err: ", err);
      });

    dispatch(selectedCategory(response.data));
  };

  useEffect(() => {
    const segment_str = window.location.pathname;
    const id = segment_str.split("/").pop();

    fetchProductDetail(id || 1);
  });

  const [visible, setVisible] = useState(9);
  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };
  
  return (
    <div>
      <div className="categoryDetails" style={itemsContainer}>
        <CategoryCats visible={visible} />
      </div>
      <button onclick={showMoreItems} style={button}>
        Load More ;)
      </button>
    </div>
  );
};

export default CategoryDetails;
