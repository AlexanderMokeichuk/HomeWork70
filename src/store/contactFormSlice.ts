import {ContactInForm} from "../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {addContactToApi, editContact, fetchDataForForm} from "./contactFormThunks";

interface FormState {
  contactForm: ContactInForm,
  lauding: boolean,
  btnLauding: boolean,
}

const initialState: FormState = {
  contactForm: {
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
      state.contactForm = action.payload;
    },
    resetContactForm: (state) => {
      state.contactForm = initialState.contactForm;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addContactToApi.pending, (state) => {
      state.contactForm = initialState.contactForm;
      state.btnLauding = true;
    });
    builder.addCase(addContactToApi.fulfilled, (state) => {
      state.btnLauding = false;
    });
    builder.addCase(addContactToApi.rejected, (state) => {
      state.btnLauding = false;
    });

    builder.addCase(fetchDataForForm.pending, (state) => {
      state.lauding = true;
    });
    builder.addCase(fetchDataForForm.fulfilled, (state, {payload: data}: PayloadAction<ContactInForm | null>) => {
      if (data) {
        state.contactForm = data;
      }
      state.lauding = false;
    });
    builder.addCase(fetchDataForForm.rejected, (state) => {
      state.lauding = false;
    });

    builder.addCase(editContact.pending, (state) => {
      state.btnLauding = true;
    });
    builder.addCase(editContact.fulfilled, (state) => {
      state.contactForm = initialState.contactForm;
      state.btnLauding = false;
    });
    builder.addCase(editContact.rejected, (state) => {
      state.btnLauding = false;
    });
  }
});

export const contactFormReducer = contactFormSlice.reducer;
export const {changeContactValue, resetContactForm} = contactFormSlice.actions;
export const selectorContact = (state: RootState) => state.contactForm.contactForm;
export const selectorLauding = (state: RootState) => state.contactForm.lauding;
export const selectorBtnLauding = (state: RootState) => state.contactForm.btnLauding;
