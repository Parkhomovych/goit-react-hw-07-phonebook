import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContacts, deleteContacts } from './operations';
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending](state) {
      state.isLoading = true;
    },
    [addContacts.pending](state) {
      state.isLoading = true;
    },
    [deleteContacts.pending](state) {
      state.isLoading = true;
    },
    [fetchContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContacts.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [addContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [deleteContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = state.contacts.filter(
        elem => elem.id !== action.payload.id
      );
    },
  },
});
