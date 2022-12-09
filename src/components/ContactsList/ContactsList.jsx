import { List, Item, Button } from './ContactsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';
import { useContact, useFilter } from 'redux/selectors';

export const ContactsList = () => {
  const contacts = useSelector(useContact);
  const filter = useSelector(useFilter);
  const dispatch = useDispatch();
  const filterContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <List>
      {filterContacts.map(({ id, number, name }) => (
        <Item key={id}>
          <p>
            {name}: {number}
          </p>
          <Button type="button" onClick={() => dispatch(deleteContact({ id }))}>
            Delete contact
          </Button>
        </Item>
      ))}
    </List>
  );
};
