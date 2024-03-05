import {Contact} from "../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../app/store";
import {fetchContact, fetchContacts} from "./contactSliceThunks";

interface ContactSlice {
  contacts: Contact[];
  modalContact: Contact | null,
  laudingContacts: boolean,
  modalLauding: boolean,
}

const initialState: ContactSlice = {
  contacts: [],
  modalContact: null,
  laudingContacts: false,
  modalLauding: false
};

const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.laudingContacts = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload: contacts}: PayloadAction<Contact[]>) => {
      state.contacts = contacts;
      state.laudingContacts = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.laudingContacts = false;
    });


    builder.addCase(fetchContact.pending, (state) => {
      state.modalLauding = true;
    });
    builder.addCase(fetchContact.fulfilled, (state, {payload: contact}: PayloadAction<Contact | null>) => {
      state.modalContact = contact;
      state.modalLauding = false;
    });
    builder.addCase(fetchContact.rejected, (state) => {
    state.modalLauding = false;
    });

  },
});

export const contactReducer = contactSlice.reducer;
export const selectorContactsSlice = (state: RootState) => state.contact.contacts ;
export const selectorModalContactSlice = (state: RootState) => state.contact.modalContact;
export const selectorLaudingContacts  = (state: RootState) => state.contact.laudingContacts;
export const selectorModalLauding = (state: RootState) => state.contact.modalLauding;
