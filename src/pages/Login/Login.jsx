import { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/authOperations";



const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch()

    const handleInputChange = (event) => {
        const {name, value} = event.target
        name === 'email'?setEmail(value) : setPassword(value)
    }

    const handleInputClear = () => {
      setEmail('')
      setPassword('')
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(login({
          email,
          password
      }))
      handleInputClear()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Email<input onChange={handleInputChange} value={email} name="email"/></label>
      <label>Password<input onChange={handleInputChange} value={password} name="password"/></label>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Login
