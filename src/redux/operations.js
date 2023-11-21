import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL =
  'https://655ce2c325b76d9884fe1d45.mockapi.io/contacts/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
