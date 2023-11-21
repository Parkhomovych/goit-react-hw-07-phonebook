import { useDispatch } from 'react-redux';
import { MyButton, MyForm } from './Form.styled';
import { addContacts } from 'redux/operations';
export const Form = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.children.name.value;
    const number = form.children.number.value;
    dispatch(addContacts({ name, number }));
    form.reset();
  };
  return (
    <MyForm onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" required />
      <label htmlFor="number">Number</label>
      <input type="text" name="number" id="number" required />
      <MyButton type="submit">Add contact</MyButton>
    </MyForm>
  );
};
