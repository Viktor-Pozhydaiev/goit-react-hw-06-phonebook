import css from '../ContactList/Contact.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export const Contact = ({ id, number, name }) => {
  const dispatch = useDispatch();

  const deleteContact = () => dispatch(deleteContacts(id));

  return (
    <li className={css.contact_item}>
      {name}: {number}
      <button className={css.contact_btn} onClick={deleteContact} type="button">
        Delete
      </button>
    </li>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
