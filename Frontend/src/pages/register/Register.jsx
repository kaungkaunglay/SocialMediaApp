import './register.scss'
import { Link } from 'react-router-dom'
const Register =() =>{
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
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />
                        <input type="password" placeholder='Password' />
                        <button>Register</button>
                    </form>
                </div>
                </div>
        </div>
    )
}
export default Register