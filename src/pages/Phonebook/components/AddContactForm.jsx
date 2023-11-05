import React, { useState } from 'react';
import { usePostContactMutation, useGetContactsQuery } from '../../../redux/contacts/contactsOperations';


const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const {data} = useGetContactsQuery();

  const [postContacts] = usePostContactMutation();
  // const [postContacts, {isLoading}] = usePostContactMutation();

  const handleInputChange = (event) => {
      const {name, value} = event.target;
      name === 'name'?setName(value) : setNumber(value)
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    if (data) {
      const isInContacts = data?.find(contact => contact.name === name)
      if (isInContacts) {
        return alert(`${name} is already in contacts`)
      }
    }

    const contactToAdd = {
      name, 
      number
    };

    try {
      await postContacts(contactToAdd)
    } catch (error) {
      console.log(error);
    };

    resetForm()
  }

  const resetForm = () => {
    setName('');
    setNumber('')
  }

  return (
    <form onSubmit={handleSubmit}>
        <label>Name<input onChange={handleInputChange} value={name} name="name"/></label>
        <label>Number<input onChange={handleInputChange} value={number} name="number"/></label>
        <button type="submit">Save</button>
    </form>
  )
}

export default AddContactForm
