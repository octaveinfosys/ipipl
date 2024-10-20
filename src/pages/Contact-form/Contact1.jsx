import React from 'react'
import { useState } from 'react';
import axios from "axios";

// let history = useNavigate();

function Contact1() {
    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const submitForm = (e) =>{
        e.preventDefault();
        const sendData = {
            first_name:data.first_name,
            last_name:data.last_name,
            email:data.email,
            password:data.password,
        }
        // console.log(sendData)
        axios.post('http://localhost/php-react/octave-infosys/php/register.php',sendData)
        .then((result) =>{
            if(result.data.status === "Invalid"){
                alert('invalid user');
            }
            else if(result.data.status === "valid"){
                // history('/login')
                alert('Sent');
            }

        })
    }
    return (
        <>
            <div className="App">
                <p>Contact Me</p>
                <div>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                        <input type="text" className="form-control" name='first_name' placeholder="Name" onChange={handleChange}
                            value={data.first_name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" name='last_name' placeholder="Last Name" onChange={handleChange}
                            value={data.last_name} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' placeholder="name@example.com" onChange={handleChange}
                            value={data.email} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' placeholder="Password" onChange={handleChange}
                            value={data.password} />
                    </div>
                    <div className="mb-3">
                        <input type="submit" className="btn btn-primary" name='submit' value="Register" />
                    </div>
                </form>

                </div>
            </div>
        </>
    )
}

export default Contact1
