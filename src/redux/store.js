import { contactReducer } from "./contactsSlice";
import { filtersReduser } from "./filtersSlice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filters: filtersReduser,
  },
});
