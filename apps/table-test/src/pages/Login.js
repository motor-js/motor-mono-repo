import { useContext } from 'react'
import { MotorTicketContext } from '@motor-js/engine'
import { useNavigate } from "react-router-dom";

function Login() {

  const [state, dispatch] = useContext(MotorTicketContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('called')
    fetch("/get-ticket")
    .then((res) => res.json())
    .then((data) => data.ticket)
    .then((ticket) => dispatch({ type: "SET_TICKET", payload: ticket }))        
    .then(() => navigate("/"))
  }

  return (
    <>
      <h2>Login</h2>
      <button onClick={handleLogin}>Log In</button>
    </>
  )
}

export default Login
