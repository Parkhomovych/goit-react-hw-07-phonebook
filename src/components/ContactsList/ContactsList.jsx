import { getContacts, getFilter, getisLoading } from 'redux/selectors';
import { Button, Item, List } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts, fetchContacts } from 'redux/operations';
import { useEffect } from 'react';
import { Hearts } from 'react-loader-spinner';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loader = useSelector(getisLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {loader ? (
        <Hearts
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      ) : (
        <List>
          {contacts
            .filter(({ name }) =>
              name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(({ id, name, number }) => (
              <Item key={id}>
                <p>
                  {name}: {number}
                </p>
                <Button
                  onClick={() => {
                    dispatch(deleteContacts(id));
                  }}
                  type="button"
                >
                  Delete
                </Button>
              </Item>
            ))}
        </List>
      )}
    </>
  );
};
