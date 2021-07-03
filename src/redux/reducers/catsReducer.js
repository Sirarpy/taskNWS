import { ActionTypes } from "../constants/action-types";
const intialState = {
  categories: [],
  category: [],
};

export const categoriesReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};

export const selectedCategoryReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};
