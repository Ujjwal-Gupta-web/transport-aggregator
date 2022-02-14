import React, { useState } from 'react'
import { login_biz, get_biz_login_otp, verify_biz_login_otp } from '../controllers/biz';
import { Form, Button } from "react-bootstrap";

const BizLogin = () => {

  function login(e) {
    e.preventDefault();
    setIsDisabled(true);
    let obj = {
      "biz_email": document.getElementById("login_biz_email").value,
      "biz_password": document.getElementById("login_biz_password").value,
    }

    login_biz(obj).then(data => {
      setIsDisabled(false);
      if (data.tag === true) {
        localStorage.setItem("user", data.token);
        localStorage.setItem("userType", "biz");
        window.location.reload();
      }
      else {
        alert("Invalid Credentials");
      }
    });

  }

  let [isDisabled, setIsDisabled] = useState(false);

  return (
    <>

      <div className='container d-flex flex-column align-items-center' >
        <h3 className='text-center my-3 mb-5'>For Businesses</h3>

        <div className="p-4" style={{ background: "#d4d4d440", maxWidth: "500px", minWidth: "350px", borderRadius: "10px 10px 10px 10px", boxShadow: "-2px 4px 5px gray" }}>
          <h4 className='text-center'>Login</h4>
          <hr />

          <Form onSubmit={login}>
            <Form.Group className="mb-3" controlId="login_biz_email">
              <Form.Label>Email id :</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
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
            <br />
            <button className='btn my-2' type="button" data-bs-toggle="modal" data-bs-target="#biz_login" style={{ border: "1px solid #2fb8ff42" }}>Login with OTP</button>
            <hr />
            Not registered till now ?  <a href="/biz/signup">Signup</a>
          </div>
        </div>

      </div>



      <div class="modal fade" id="biz_login" tabindex="-1" aria-labelledby="biz_loginLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="biz_loginLabel">Login with otp</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">

              <div className="mb-3">
                <label htmlFor="login_otp_biz_email" className="form-label">Email id: </label>
                <input className="form-control" type="text" id="login_otp_biz_email" required />
              </div>

              <div className="mb-3">
                <button onClick={() => {
                  let obj = { "biz_email": document.getElementById("login_otp_biz_email").value };
                  get_biz_login_otp(obj).then(data => alert(data.message));
                }}>Get OTP</button>
              </div>

              <div className="mb-3">
                <label htmlFor="login_otp_biz" className="form-label">OTP (4 digits) </label>
                <input className="form-control" type="text" id="login_otp_biz" required />
              </div>

              <div className="mb-3">
                <button onClick={() => {
                  let obj = {
                    "biz_email": document.getElementById("login_otp_biz_email").value,
                    "otp": document.getElementById("login_otp_biz").value
                  };
                  verify_biz_login_otp(obj).then(
                    data => {

                      if (data.tag === true) {
                        localStorage.setItem("user", data.token);
                        localStorage.setItem("userType", "biz");
                        window.location.reload();
                      }
                      alert(data.message);
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

export default BizLogin