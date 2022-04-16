import {useState, useEffect} from 'react';
import axios from "axios";

function CharityRegistration(props){

    const [registerForm, setRegisterForm] = useState({
        email: "",
        username: "",
        password: "",
    })
  
    function register(event) {
        axios({
          method: "POST",
          url:"/token",
          data:{
            username: registerForm.username,
            email: registerForm.email,
            password: registerForm.password
           }
        })
        .then((response) => {
          props.setToken(response.data.access_token)
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })
  
        setRegisterForm(({
          username: '',
          email: "",
          password: ""}))
  
        event.preventDefault()
      }
  
      function handleChange(event) { 
        const {value, name} = event.target
        setRegisterForm(prevNote => ({
            ...prevNote, [name]: value})
        )}
  
      return (
        <div>
          <form>
            <input onChange={handleChange} 
                  type="username"
                  text={registerForm.username} 
                  name="username" 
                  placeholder="Organization Name" 
                  value={registerForm.username} />
            <input onChange={handleChange} 
                  type="email"
                  text={registerForm.email} 
                  name="email" 
                  placeholder="Email" 
                  value={registerForm.email} />
            <input onChange={handleChange} 
                  type="password"
                  text={registerForm.password} 
                  name="password" 
                  placeholder="Password" 
                  value={registerForm.password} />

             <button onClick={register}>Submit</button>
          </form>
        </div>
      );
}

export default CharityRegistration;