import { Contact } from './Contact';
import css from '../ContactList/Contact.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const ContactList = ({ title }) => {
  const contacts = useSelector(getContacts);

  return (
    <ul className={css.contacts_list}>
      <h2>{title}</h2>
      {contacts.map(contact => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  title: PropTypes.string.isRequired,
};
