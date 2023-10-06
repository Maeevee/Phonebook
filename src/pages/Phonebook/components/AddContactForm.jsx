import React, { useState } from 'react'


const AddContactForm = () => {
    const [name, setName] = useState();
    const [number, setNumber] = useState();

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        name === 'name'?setName(value) : setNumber(value)
    };

  return (
    <form>
        <label>Name<input onChange={handleInputChange} value={name} name="name"/></label>
        <label>Number<input onChange={handleInputChange} value={number} name="number"/></label>
        <button type="submit">Save</button>
    </form>
  )
}

export default AddContactForm
