import { Form } from './Form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
export const App = () => {
  const dispatch = useDispatch();
  return (
    <div style={{ padding: '20px' }}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input
        type="text"
        onChange={e => {
          dispatch(setFilter(e.target.value));
        }}
      />
      <ContactsList />
    </div>
  );
};