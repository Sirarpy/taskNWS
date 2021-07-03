import { combineReducers } from "redux";
import { categoriesReducer, selectedCategoryReducer } from "./catsReducer";

const reducers = combineReducers({
  allCategories: categoriesReducer,
  category: selectedCategoryReducer,
});
export default reducers;
