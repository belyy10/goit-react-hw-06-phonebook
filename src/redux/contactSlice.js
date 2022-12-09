import { createSlice, nanoid } from '@reduxjs/toolkit';

const defaultContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const contactSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact(state, action) {
      state.push({ ...action.payload, id: nanoid() });
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload.id);
    },
  },
});
const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    onFilter(state, action) {
      return action.payload;
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
export const { onFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
