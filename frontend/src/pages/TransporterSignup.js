import React from 'react'
import { register_transporter } from '../controllers/transporter';

const TransporterSignup = () => {

  function signup(e) {
    e.preventDefault();

    let routes = [
      {
        from_city: document.getElementById("signup_transporter_from_city1").value,
        from_state: document.getElementById("signup_transporter_from_state1").value,
        to_city: document.getElementById("signup_transporter_to_city1").value,
        to_state: document.getElementById("signup_transporter_to_state1").value,
      },
      {
        from_city: document.getElementById("signup_transporter_from_city2").value,
        from_state: document.getElementById("signup_transporter_from_state2").value,
        to_city: document.getElementById("signup_transporter_to_city2").value,
        to_state: document.getElementById("signup_transporter_to_state2").value,
      },
      {
        from_city: document.getElementById("signup_transporter_from_city3").value,
        from_state: document.getElementById("signup_transporter_from_state3").value,
        to_city: document.getElementById("signup_transporter_to_city3").value,
        to_state: document.getElementById("signup_transporter_to_state3").value,
      },
    ]

    let obj = {
      "transporter_email": document.getElementById("signup_transporter_email").value,
      "transporter_driver_name": document.getElementById("signup_transporter_driver_name").value,
      "transporter_name": document.getElementById("signup_transporter_name").value,
      "transporter_truck_number": document.getElementById("signup_transporter_truck_number").value,
      "transporter_truck_capacity": document.getElementById("signup_transporter_truck_capacity").value,
      "transporter_experience": document.getElementById("signup_transporter_experience").value,
      "transporter_mobile": document.getElementById("signup_transporter_mobile").value,
      "transporter_password": document.getElementById("signup_transporter_password").value,
      "transporter_routes_arr": routes,
    }

    register_transporter(obj).then(data => console.log(data));
  }

  return (
    <>

      <div className='container d-flex flex-column align-items-center' >
        <h3 className='text-center my-3 mb-5'>For Transporters</h3>

        <div className="p-4 mb-3" style={{ background: "#d4d4d440", minWidth: "90%", borderRadius: "10px 10px 10px 10px", boxShadow: "-2px 4px 5px gray" }}>
          <h4 className='text-center'>Signup</h4>
          <hr />
          <form onSubmit={signup}>
            <div className="mb-3">
              <label htmlFor="signup_transporter_email" className="form-label">Email id : </label>
              <input className="form-control" type="email" id="signup_transporter_email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_driver_name" className="form-label">Name : </label>
              <input className="form-control" type="text" id="signup_transporter_driver_name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_name" className="form-label">Transport Name : </label>
              <input className="form-control" type="text" id="signup_transporter_name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_truck_number" className="form-label">Truck Number : </label>
              <input className="form-control" type="text" id="signup_transporter_truck_number" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_truck_capacity" className="form-label">Truck Capacity : </label>
              <input className="form-control" type="number" id="signup_transporter_truck_capacity" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_experience" className="form-label">Experience : </label>
              <input className="form-control" type="number" id="signup_transporter_experience" required />
            </div>
            <div className="mb-3">
              <label htmlFor="signup_transporter_mobile" className="form-label">Mobile number : </label>
              <input className="form-control" type="text" id="signup_transporter_mobile" required />
            </div>

            <b>Add three most preferred route</b>
            <hr />


            <div className='row g-2'>
              <b>From</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_city1" className="form-label">from_city1 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_city1" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_state1" className="form-label">from_state1 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_state1" required />
              </div>
              <b>To</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_city1" className="form-label">tocity1 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_city1" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_state1" className="form-label">tostate1 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_state1" required />
              </div>
            </div>

            <hr />

            <div className='row g-2'>
              <b>From</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_city2" className="form-label">from_city2 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_city2" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_state2" className="form-label">from_state2 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_state2" required />
              </div>
              <b>To</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_city2" className="form-label">to_city2 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_city2" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_state2" className="form-label">to_city3 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_state2" required />
              </div>
            </div>
            <hr />

            <div className='row g-2'>
              <b>From</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_city3" className="form-label">from_city3 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_city3" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_from_state3" className="form-label">from_state3 : </label>
                <input className="form-control" type="text" id="signup_transporter_from_state3" required />
              </div>
              <b>To</b>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_city3" className="form-label">to_city3 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_city3" required />
              </div>
              <div className="mb-3 col-6">
                <label htmlFor="signup_transporter_to_state3" className="form-label">to_city3 : </label>
                <input className="form-control" type="text" id="signup_transporter_to_state3" required />
              </div>
            </div>

            <hr />

            <div className="mb-3">
              <label htmlFor="signup_transporter_password" className="form-label">Password :</label>
              <input className="form-control" type="password" id="signup_transporter_password" required />
            </div>
            <button className='btn border border-dark my-2' type="submit" style={{ background: "#2fb8ff42" }}>Signup</button>
          </form>
          <div className='text-center'>

            <hr />
            Already registered ?  <a href="/transporter/login">Login</a>
          </div>
        </div>

      </div>


    </>
  )
}

export default TransporterSignup