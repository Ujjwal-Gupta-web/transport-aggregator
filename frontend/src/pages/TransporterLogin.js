import React, { useState } from 'react'
import { login_transporter,get_transporter_login_otp,verify_transporter_login_otp } from '../controllers/transporter'
import { Form, Button } from "react-bootstrap";

const TransporterLogin = () => {

  function login(e) {
    e.preventDefault();
    setIsDisabled(true);
    let obj = {
      "transporter_email": document.getElementById("login_transporter_email").value,
      "transporter_password": document.getElementById("login_transporter_password").value
    }
    login_transporter(obj).then(data => {
      console.log(data);
      setIsDisabled(false);
      if (data.tag === true) {
        localStorage.setItem("user", data.token);
        localStorage.setItem("userType", "transporter");
        window.location.reload();
      }
      else {
        alert("Invalid Credentials");
      }
    })
  }

  let [isDisabled, setIsDisabled] = useState(false);

  return (
    <>




      <div className='container d-flex flex-column align-items-center' >
        <h3 className='text-center my-3 mb-5'>For Transporters</h3>

        <div className="p-4" style={{ background: "#d4d4d440", maxWidth: "500px", minWidth: "350px", borderRadius: "10px 10px 10px 10px", boxShadow: "-2px 4px 5px gray" }}>
          <h4 className='text-center'>Login</h4>
          <hr />

          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="login_transporter_email">
              <Form.Label>Email id :</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
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
            <br />
            <button className='btn my-2' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ border: "1px solid #2fb8ff42" }}>Login with OTP</button>
            <hr />
            Not registered till now ?  <a href="/transporter/signup">Signup</a>
          </div>
        </div>

      </div>





      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Login with otp</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">

              <div className="mb-3">
                <label htmlFor="login_otp_transporter_email" className="form-label">Email id: </label>
                <input className="form-control" type="text" id="login_otp_transporter_email" required />
              </div>

              <div className="mb-3">
                <button onClick={()=>{
                  let obj={"transporter_email":document.getElementById("login_otp_transporter_email").value};
                  get_transporter_login_otp(obj).then(data=>console.log(data));
                }}>Get OTP</button>
              </div>

              <div className="mb-3">
                <label htmlFor="login_otp_transporter" className="form-label">OTP (4 digits) </label>
                <input className="form-control" type="text" id="login_otp_transporter" required />
              </div>

              <div className="mb-3">
                <button onClick={()=>{
                  let obj={
                    "transporter_email":document.getElementById("login_otp_transporter_email").value,
                    "otp":document.getElementById("login_otp_transporter").value
                  };
                  verify_transporter_login_otp(obj).then(
                    data=>{
                      
                      if(data.tag===true){
                        localStorage.setItem("user", data.token);
                        localStorage.setItem("userType", "transporter");
                      }
                      alert(data.message);
                      console.log(data);
                      window.location.realod();
                      }
                  );
                }}
                >Login</button>
              </div>

            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
            
          </div>


        </div>
      </div>
  
 

    
    </>
  )
}

export default TransporterLogin