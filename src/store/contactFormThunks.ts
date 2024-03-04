import {createAsyncThunk} from "@reduxjs/toolkit";
import {ContactInForm} from "../type";
import axiosApi from "../axiosApi";

export const addContactToApi = createAsyncThunk<void, ContactInForm>(
  "addContact/contactForm",
  async (contact) => {
    await axiosApi.post(".json", contact);
  },
);