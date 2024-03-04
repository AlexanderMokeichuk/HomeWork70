import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact, ContactInApi} from "../type";
import axiosApi from "../axiosApi";

export const fetchContacts = createAsyncThunk<Contact[] | []>(
  "contacts/fetchContacts",
  async () => {
    const {data: contacts} = await axiosApi.get<ContactInApi | null>(".json");
    if (contacts) {
      const newContacts: Contact[] = Object.keys(contacts).map((id) => {
        return {
          ...contacts[id],
          id
        };
      });

      return newContacts;
    } else {
      return [];
    }
  }
);