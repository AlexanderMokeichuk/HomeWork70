import {Contact} from "../type";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchContacts} from "./contactsSliceThunks";
import {RootState} from "../app/store";

interface ContactsSlice {
  contacts: Contact[];
  lauding: boolean,
}

const initialState: ContactsSlice = {
  contacts: [],
  lauding: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchContacts.pending, (state) => {
      state.lauding = true;
    });
    builder.addCase(fetchContacts.fulfilled, (state, {payload: contacts}: PayloadAction<Contact[]>) => {
      state.contacts = contacts;
      state.lauding = false;
    });
    builder.addCase(fetchContacts.rejected, (state) => {
      state.lauding = false;
    });
  },
});

export const contactsReducer = contactsSlice.reducer;
export const selectorContactsSlice = (state: RootState) => state.contacts;