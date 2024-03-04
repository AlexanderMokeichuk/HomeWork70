import {createAsyncThunk} from "@reduxjs/toolkit";
import {ContactData} from "../type";
import axiosApi from "../axiosApi";

export const addContactToApi = createAsyncThunk<void, ContactData>(
  "addContact/contactForm",
  async (contact) => {
    await axiosApi.post(".json", contact);
  },
);