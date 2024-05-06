import { createSelector } from "@reduxjs/toolkit";
import { selectfilters } from "../filters/selectors";
export const selectContacts = (state) => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectContacts, selectfilters],
  (contacts, filters) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filters.toLowerCase().trim());
    });
  }
);
