import {configureStore} from "@reduxjs/toolkit";
import {contactFormReducer} from "../store/contactFormSlice";
import {contactReducer} from "../store/contactSlice";

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    contact: contactReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;