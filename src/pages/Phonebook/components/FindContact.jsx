import React, { useState } from 'react'

const FindContact = () => {

    const [search, setSearch] = useState();

    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearch(value);
    }
  return (
    <input onChange={handleInputChange} value={search} placeholder='Enter name'/>
  )
}

export default FindContact
