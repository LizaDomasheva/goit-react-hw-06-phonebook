import { createAction } from '@reduxjs/toolkit';
// import actionTypes from './contactsType';

const addContact = createAction('contacts/add');
const deleteContact = createAction('contacts/delete');
const filterContact = createAction('contacts/filter');
// const localStorageContact = createAction('contacts/localStorage');

export default {
  addContact,
  deleteContact,
  filterContact,
  // localStorageContact,
};

// const addContact = newContact => ({
//   type: actionTypes.ADD,
//   payload: { newContact },
// });

// const deleteContact = id => ({
//   type: actionTypes.DELETE,
//   payload: { id },
// });

// const filterContact = filter => ({
//   type: actionTypes.FILTER,
//   payload: { filter },
// });

// const localStorageContact = persistedContacts => ({
//   type: actionTypes.LOCAL_STORAGE,
//   payload: { persistedContacts },
// });
