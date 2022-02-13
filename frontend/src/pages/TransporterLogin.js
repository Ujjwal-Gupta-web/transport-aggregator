import React,{useState} from 'react'
import { login_transporter } from '../controllers/transporter'
import {Form,Button} from "react-bootstrap";

const TransporterLogin = () => {

function login(e){
  e.preventDefault();
  setIsDisabled(true);
  let obj={
    "transporter_email":document.getElementById("login_transporter_email").value,
    "transporter_password":document.getElementById("login_transporter_password").value
  }
  login_transporter(obj).then(data=>{
      console.log(data);
      setIsDisabled(false);
      localStorage.setItem("user",data.token);
      window.location.reload();
    })
}

let [isDisabled,setIsDisabled]=useState(false);

  return (
    <>
    
    


    <div className='container d-flex flex-column align-items-center' >
    <h3 className='text-center my-3 mb-5'>For Transporters</h3>

<div className="p-4" style={{background:"#d4d4d440" ,maxWidth:"500px",minWidth:"350px", borderRadius:"10px 10px 10px 10px", boxShadow:"-2px 4px 5px gray"}}>
<h4 className='text-center'>Login</h4>
<hr/>

    <Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="login_transporter_email">
                            <Form.Label>Email id :</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login_transporter_password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" required />
                        </Form.Group>

                        <div className='text-center'>
                        <Button className='border border-dark my-2 text-dark' disabled={isDisabled} style={{ background: "#2fb8ff42" }} type="submit">
                            Login
                        </Button>
                        </div>
                    </Form>
    <div className='text-center'>
    OR
    <br/>
    <button className='btn my-2' style={{ border: "1px solid #2fb8ff42" }}>Login with OTP</button>
    <hr/>
    Not registered till now ?  <a href="/transporter/signup">Signup</a>
</div>
</div>

    </div>
  
    
    </>
  )
}

export default TransporterLogin