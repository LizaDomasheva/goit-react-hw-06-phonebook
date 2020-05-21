// import { createStore, combineReducers } from 'redux';
import {configureStore,getDefaultMiddleware  } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsReducer';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


const persistConfig = {
    key: 'contacts',
    storage,
  }
   
// const basicReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(
//   basicReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
 reducer: {
  contacts: persistedReducer,
 },
 middleware: getDefaultMiddleware ( { 
    serializableCheck : false})
})

// const store = configureStore({
//  reducer: {
//   contacts: contactsReducer,
//  } 
// })

export const persistor = persistStore(store)

// export default store;
