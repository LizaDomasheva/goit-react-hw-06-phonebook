import { combineReducers } from 'redux';
import actionTypes from './contactsType';
import {createReducer} from '@reduxjs/toolkit';

const items = createReducer([], {
  [actionTypes.ADD]: (state, {payload}) => [...state, payload],
  [actionTypes.DELETE]: (state, {payload}) => state.filter(contact => contact.id !== payload),
  // [actionTypes.LOCAL_STORAGE]: (state, {payload}) => JSON.parse(payload)
})

const filter = createReducer('', {
[actionTypes.FILTER]: (state, {payload}) => payload
})

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case actionTypes.ADD:
//       return [...state, payload];

//     case actionTypes.DELETE:
//       return state.filter(contact => contact.id !== payload);

//       case actionTypes.LOCAL_STORAGE:
//         return JSON.parse(payload)

//     default:
//       return state;
//   }
// };

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case actionTypes.FILTER:
//       return payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
