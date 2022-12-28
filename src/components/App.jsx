import React from 'react';
import { ContactForm } from './Form/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Section } from './Section/Section';

export const App = () => {
  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const onSearch = event => {
  //   setFilter(event.currentTarget.value);
  // };

  // const filterContacts = () => {
  //   const normalize = filter.toLocaleLowerCase();
  //   const sortContacts = contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalize)
  //   );
  //   return sortContacts;
  // };

  return (
    <Section title="Phonebook">
      <ContactForm />
      <Filter />
      <ContactList title="Contacts" />
    </Section>
  );
};
