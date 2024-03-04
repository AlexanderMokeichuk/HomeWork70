import {ContactData} from "../type";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";

interface FormState {
  contact: ContactData,
  lauding: boolean,
}
const initialState: FormState = {
  contact: {
    name: "",
    phoneNumber: "",
    email: "",
    photo: "",
  },
  lauding: false,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: initialState,
  reducers: {
    changeContactValue: (state, action) => {
      state.contact = action.payload;
    },
  },
});

export const contactFormReducer = contactFormSlice.reducer;
export const {changeContactValue} = contactFormSlice.actions;
export const selectorContact = (state: RootState) => state.contactForm.contact;
export const selectorLauding = (state: RootState) => state.contactForm.lauding;