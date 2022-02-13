import React,{useState} from 'react'
import { login_biz } from '../controllers/biz';
import {Form,Button} from "react-bootstrap";

const BizLogin = () => {

  function login(e){
    e.preventDefault();
    setIsDisabled(true);
    let obj={
      "biz_email":document.getElementById("login_biz_email").value,
      "biz_password":document.getElementById("login_biz_password").value,
    }
  
    login_biz(obj).then(data=>{
      console.log(data);
      setIsDisabled(false);
      if(data.tag===true){
      localStorage.setItem("user",data.token);
      localStorage.setItem("userType","biz");
      window.location.reload();
    }
    else{
      alert("Invalid Credentials");
    }
    });
    
  }

  let [isDisabled,setIsDisabled]=useState(false);

  return (
    <>
    
    <div className='container d-flex flex-column align-items-center' >
    <h3 className='text-center my-3 mb-5'>For Businesses</h3>

<div className="p-4" style={{background:"#d4d4d440" ,maxWidth:"500px",minWidth:"350px", borderRadius:"10px 10px 10px 10px", boxShadow:"-2px 4px 5px gray"}}>
<h4 className='text-center'>Login</h4>
<hr/>
<Form onSubmit={login}>
                        <Form.Group className="mb-3" controlId="login_biz_email">
                            <Form.Label>Email id :</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  required/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="login_biz_password">
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
    Not registered till now ?  <a href="/biz/signup">Signup</a>
</div>
</div>

    </div>
  
    </>
  )
}

export default BizLogin