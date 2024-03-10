import './register.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from "axios";
const Register =() =>{
    const [inputs, setInputs] = useState({
        username: "",
        email: "",
        password: "",
        name: ""
    })
    const [err, setErr] = useState(null);
    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name]:e.target.value}))
    }
    const handleClick = async e => {
        e.preventDefault();
        try{
            await axios.post("http://localhost:8000/Backend/auth/register", inputs); 
            
        }catch(err) {
            setErr(err.response.data);
        }
    }

    return (
        <div className='register'>
            <div className='card'>
                <div className='left'>
                <h1>Login Account</h1>
                <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias nemo excepturi in fuga doloremque sit voluptatum, culpa eos id quidem quibusdam, quisquam deleniti! Iure, et sunt rem suscipit dolorem consectetur?</p>
            
                <span>Do you have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
                  </div>
                <div className='right'>
                    <h1>Register</h1>
                    <form action="">
                        <input type="text" placeholder='Username' name="username" onChange={handleChange} />
                        <input type="text" placeholder='Email' name="email" onChange={handleChange} />
                        <input type="password" placeholder='Password' name="password" onChange={handleChange} />
                        <input type="text" placeholder='Name' name="name" onChange={handleChange}/>
                       {err && err}
                        <button onClick={handleClick}>Register</button>
                    </form>
                </div>
                </div>
        </div>
    )
}
export default Register