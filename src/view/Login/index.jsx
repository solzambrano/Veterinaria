import { useState } from "react"
import { NavLink } from "react-router-dom";

const Login= ()=>{
    const[user,setUser]=useState('');
    const[password,setPassword]= useState('')
 const handleSubmitForm = (e) =>{
        e.preventDefault()
 }
 
return(
        <>
        <form onSubmit={handleSubmitForm}>
            <label for="user"> Usuario
                <input type="text" required value={user}
                onChange={(e)=>setUser(e.target.value)}/>
            </label>
            <label for="pass"> Contraseña
                <input type="password" required value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </label>
            <button type ="submit">Sign Up</button>
        </form>
        <p> No tienes cuenta? <NavLink to='register'>Registrate ! </NavLink></p>
        </>
    )
}
export default Login