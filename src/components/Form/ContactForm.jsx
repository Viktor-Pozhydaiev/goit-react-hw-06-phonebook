import css from '../Form/Form.module.css';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContacts } from 'redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handelSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const name = event.target.name.value;
    const number = event.target.number.value;
    console.log(name, number);
    dispatch(addContacts(name, number));
    form.reset();
  };

  return (
    <div>
      <form className={css.form_wrapper} onSubmit={handelSubmit}>
        <p className={css.name_form}> Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nanoid()}
          placeholder="Enter name.."
          required
        />
        <p className={css.phone_form}>Phone</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number.."
          id={nanoid()}
          required
        />
        <button className={css.form_btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
