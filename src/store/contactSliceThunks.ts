import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact, ContactInApi} from "../type";
import axiosApi from "../axiosApi";

export const fetchContacts = createAsyncThunk<Contact[] | []>(
  "contact/fetchContacts",
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

export const fetchContact = createAsyncThunk<Contact | null, string>(
  "contact/fetchContact",
  async (id) => {
    const {data: contact} = await axiosApi.get<Contact | null>(`/${id}.json`);
    if (contact) {
      return {
        ...contact,
        id
      };
    } else {
      return null;
    }
  },
);

export const deleteContactInApi = createAsyncThunk<void, string>(
  "contact/deleteContact",
  async (id) => {
    await axiosApi.delete(`/${id}.json`);
  },
);