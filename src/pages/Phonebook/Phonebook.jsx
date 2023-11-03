import { useState } from 'react';
import AddContactForm from './components/AddContactForm';
import ContactList from './components/ContactList';
import FindContact from './components/FindContact';

const Phonebook = () => {

  const [search, setSearch] = useState('');
    

    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }

  return (
    <>
        <AddContactForm/>
        <FindContact search={search} handleInputChange={handleInputChange}/>
        <ContactList search={search}/>
    </>
  )
}

export default Phonebook

