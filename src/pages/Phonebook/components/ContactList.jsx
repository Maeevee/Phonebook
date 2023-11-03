import { useGetContactsQuery, useDeleteContactMutation } from '../../../redux/contacts/contactsOperations';
import { ChangeBtn } from '../../../components/ChangeBtn/ChangeBtn';

const ContactList = ({search}) => {

    const {data} = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();
    // const [changeContact] = useChangeContactMutation();

    const filtredContacts = () => {
        return data?.filter((contact) => contact.name.toLowerCase().includes(search))
    }

    const contactList = filtredContacts()

    return (
    <>
        <ul>
            {contactList?.map(({name, number, id}) => <li key={id}><p>{name}</p><p>{number}</p><ChangeBtn name={name} number={number} id={id} /><button onClick={() => deleteContact(id)}>Delete</button>
            </li>)}
        </ul>
    </>
    )
   
}

export default ContactList