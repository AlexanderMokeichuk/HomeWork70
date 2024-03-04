import {configureStore} from "@reduxjs/toolkit";
import {contactFormReducer} from "../store/contactFormSlice";
import {contactsReducer} from "../store/contactsSlice";

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    contacts: contactsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;