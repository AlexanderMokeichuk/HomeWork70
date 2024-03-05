import {createAsyncThunk} from "@reduxjs/toolkit";
import {Contact, ContactInForm} from "../type";
import axiosApi from "../axiosApi";

export const addContactToApi = createAsyncThunk<void, ContactInForm>(
  "contactForm/addContact",
  async (contact) => {
    await axiosApi.post(".json", contact);
  },
);

export const fetchDataForForm = createAsyncThunk<ContactInForm | null, string>(
  "contactForm/fetchContact",
  async (id) => {
    const {data: contact} = await axiosApi.get<Contact | null>(`/${id}.json`);
    if (contact) {
      return {
        ...contact,
      };
    } else {
      return null;
    }
  },
);

export const editContact = createAsyncThunk<void, Contact>(
  "contactForm/editContact",
  async (contact) => {
    const data: ContactInForm = {
      name: contact.name,
      email: contact.email,
      phoneNumber: contact.phoneNumber,
      photo: contact.photo
    };
    await axiosApi.put(`/${contact.id}.json`, data);
  },
);

