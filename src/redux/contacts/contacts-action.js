import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const AddContact = createAction("contacts/Add", (obj) => {
  return {
    payload: {
      id: uuidv4(),
      name: obj.name,
      number: obj.number,
    },
  };
});

const DeleteContacts = createAction("contacts/Delete");
const FilterContacts = createAction("contacts/Filter");

export default { AddContact, DeleteContacts, FilterContacts };
