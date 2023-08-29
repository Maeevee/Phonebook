import { useState } from "react"
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/authOperations";

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const {name, value} = event.target
        switch (name) {
            case 'name': setName(value);
            return;
            case 'email': setEmail(value);
            return;
            case 'password': setPassword(value);
            return;
            default: return;
        }
    }

    const handleInputClear = () => {
        setEmail('')
        setName('')
        setPassword('')
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(register({
            email,
            password,
            name
        }))
        handleInputClear()
    }



    return (
        <form onSubmit={handleSubmit}>
            <label>Name<input onChange={handleInputChange} value={name} name="name"/></label>
            <label>Email<input onChange={handleInputChange} value={email} name="email"/></label>
            <label>Password<input onChange={handleInputChange} value={password} name="password"/></label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Register