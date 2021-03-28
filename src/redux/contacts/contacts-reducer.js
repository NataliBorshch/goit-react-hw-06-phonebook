import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import action from "./contacts-action";

const items = createReducer([], {
  [action.AddContact]: (state, action) => includesContacts(state, action),
  [action.DeleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [action.FilterContacts]: (_, { payload }) => payload,
});
const contactsReducer = combineReducers({
  items,
  filter,
});

const includesContacts = (array, contact) => {
  const includeContacts = array.map((item) => item.number);
  if (includeContacts.includes(contact.payload.number)) {
    alert(`${contact.payload.number}phone number  is  already in contacts`);
    return array;
  }
  return [...array, contact.payload];
};

export default contactsReducer;
