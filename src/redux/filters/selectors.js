import { createSelector } from "@reduxjs/toolkit";

export const selectfilters = (state) => {
  return state.filters.name;
};
