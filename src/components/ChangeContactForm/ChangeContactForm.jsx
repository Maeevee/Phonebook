import { useState } from "react"
import { useChangeContactMutation } from "../../redux/contacts/contactsOperations";

export const ChangeContactForm = ({ name, id, number }) => {

    const [changeContact] = useChangeContactMutation();

    const [contactName, setContactName] = useState(name);
    const [contactNumber, setContactNumber] = useState(number);

    const handleInputChange = (event) => {
        const {name, value} = event.target
        name === 'contactName'?setContactName(value) : setContactNumber(value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        changeContact({id, name: contactName, number: contactNumber});
    }

    console.log(name, number);

    return (
        <>
            <form onSubmit={handleSubmit}> 
                <input onChange={handleInputChange} value={contactName} name='contactName'/>
                <input onChange={handleInputChange} value={contactNumber} number='contactNumber'/>
                <button type="submit">Save</button>
            </form>
        </>
    )
}