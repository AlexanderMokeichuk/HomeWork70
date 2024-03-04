import {ContactInForm} from "../type";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {addContactToApi} from "./contactFormThunks";

interface FormState {
  contact: ContactInForm,
  lauding: boolean,
  btnLauding: boolean,
}

const initialState: FormState = {
  contact: {
    name: "",
    phoneNumber: "",
    email: "",
    photo: "",
  },
  lauding: false,
  btnLauding: false,
};

const contactFormSlice = createSlice({
  name: "contactForm",
  initialState: initialState,
  reducers: {
    changeContactValue: (state, action) => {
      state.contact = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addContactToApi.pending, (state) => {
      state.contact = initialState.contact;
      state.btnLauding = true;
    });
    builder.addCase(addContactToApi.fulfilled, (state) => {
      state.btnLauding = false;
    });
    builder.addCase(addContactToApi.rejected, (state) => {
      state.btnLauding = false;
    });
  }
});

export const contactFormReducer = contactFormSlice.reducer;
export const {changeContactValue} = contactFormSlice.actions;
export const selectorContact = (state: RootState) => state.contactForm.contact;
export const selectorLauding = (state: RootState) => state.contactForm.lauding;
export const selectorBtnLauding = (state: RootState) => state.contactForm.btnLauding;
