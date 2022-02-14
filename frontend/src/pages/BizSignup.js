import React, { useState } from 'react'
import { register_biz } from '../controllers/biz';
import { Form, Button } from "react-bootstrap";

const BizSingup = () => {

  let [isDisabled, setIsDisabled] = useState(false);


  function signup(e) {
    e.preventDefault();
    setIsDisabled(true);
    let obj = {
      "biz_email": document.getElementById("signup_biz_email").value,
      "biz_name": document.getElementById("signup_biz_name").value,
      "biz_city": document.getElementById("signup_biz_city").value,
      "biz_state": document.getElementById("signup_biz_state").value,
      "biz_mobile": document.getElementById("signup_biz_mobile").value,
      "biz_nature": document.getElementById("signup_biz_nature").value,
      "biz_capacity": document.getElementById("signup_biz_capacity").value,
      "biz_password": document.getElementById("signup_biz_password").value,
    }

    register_biz(obj).then(data => {
      // console.log(data);
      setIsDisabled(false);
    });
  }


  return (
    <>



      <div className='container d-flex flex-column align-items-center' >
        <h3 className='text-center my-3 mb-5'>For Businesses</h3>

        <div className="p-4 mb-3" style={{ background: "#d4d4d440", minWidth: "90%", borderRadius: "10px 10px 10px 10px", boxShadow: "-2px 4px 5px gray" }}>
          <h4 className='text-center'>Signup</h4>
          <hr />

          <Form onSubmit={signup}>
            <Form.Group className="mb-3" controlId="signup_biz_email">
              <Form.Label>Email id :</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_name">
              <Form.Label>Individual Name / Business Name :</Form.Label>
              <Form.Control type="text" placeholder="Individual Name / Business Name :" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_city">
              <Form.Label>City :</Form.Label>
              <Form.Control type="text" placeholder="City :" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_state">
              <Form.Label>State :</Form.Label>
              <Form.Control type="text" placeholder="State :" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_mobile">
              <Form.Label>Mobile Number :</Form.Label>
              <Form.Control type="text" placeholder="Mobile Number :" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="signup_biz_nature">
              <Form.Label>Nature of Material :</Form.Label>
              <Form.Control type="text" placeholder="Nature of Material :" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="signup_biz_capacity">
              <Form.Label>Capacity :</Form.Label>
              <Form.Control type="number" placeholder="Capacity :" required />
            </Form.Group>

            <div className='text-center'>
              <Button className='border border-dark my-2 text-dark' disabled={isDisabled} style={{ background: "#2fb8ff42" }} type="submit">
                Signup
              </Button>
            </div>
          </Form>

          <div className='text-center'>

            <hr />
            Already registered ?  <a href="/biz/login">Login</a>
          </div>
        </div>

      </div>

    </>
  )
}

export default BizSingup