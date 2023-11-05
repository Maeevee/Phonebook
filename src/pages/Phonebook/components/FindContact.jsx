// import React, { useState } from 'react'

const FindContact = ({search, handleInputChange}) => {
  return (
    <input onChange={handleInputChange} value={search} placeholder='Enter name'/>
  )
}

export default FindContact
