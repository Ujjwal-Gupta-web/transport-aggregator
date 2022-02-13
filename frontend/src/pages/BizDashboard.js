import React, { useEffect, useState } from 'react'
import { get_biz } from "../controllers/biz"
import { get_transporters } from "../controllers/transporter"
import { set_booking } from "../controllers/booking"
import { Card, Button, Table } from "react-bootstrap"

const BizDashboard = () => {

  let [user, setUser] = useState({});
  let [transporters, setTransporters] = useState([]);

  useEffect(() => {
    get_biz(JSON.parse(atob(localStorage.getItem("user").split(".")[1])).id).then((data) => {
      console.log(data.message);
      setUser(data.message);

      let city = data.message.biz_city;

      get_transporters().then((t) => {
        if (t.tag) {
          console.log(t.message);
          let arr = [];
          for (let i in t.message) {
            for (let j in t.message[i].transporter_routes_arr) {
              if (t.message[i].transporter_routes_arr[j].to_city.toLowerCase() === city.toLowerCase() ||
                t.message[i].transporter_routes_arr[j].from_city.toLowerCase() === city.toLowerCase()
              ) {
                arr.push(t.message[i]);

                break;
              }
            }
          }
          console.log("This is final array : ")
          console.log(arr)
          setTransporters(arr);
        }
      })

    })


  }, [])


  return (
    <div className="container" >
      <h3 className="text-center my-2 text-primary text-capitalize">Welcome , {user.biz_name}</h3>
      <hr />
      <div className="p-3" style={{ background: "#F3F3F3" }}>
        From
        <div className='row g-2'>
          <div className="mb-3 col-6">
            <input className="form-control" type="text" id="from_city" placeholder="Enter the name of city here" required />
          </div>
          <div className="mb-3 col-6">
            <input className="form-control" type="text" id="from_state" placeholder="Enter the name of state here" required />
          </div>
        </div>
        To
        <div className='row g-2'>
          <div className="mb-3 col-6">
            <input className="form-control" type="text" id="to_city" placeholder="Enter the name of city here" required />
          </div>
          <div className="mb-3 col-6">
            <input className="form-control" type="text" id="to_state" placeholder="Enter the name of state here" required />
          </div>
        </div>
        <button className="btn btn-secondary"
          onClick={() => {
            let from_city = document.getElementById("from_city").value;
            let from_state = document.getElementById("from_state").value;
            let to_city = document.getElementById("to_city").value;
            let to_state = document.getElementById("to_state").value;

            let arr = [];
            for (let i in transporters) {
              for (let j in transporters[i].transporter_routes_arr) {
                if (transporters[i].transporter_routes_arr[j].from_city.toLowerCase() === from_city.toLowerCase() &&
                  transporters[i].transporter_routes_arr[j].from_state.toLowerCase() === from_state.toLowerCase() &&
                  transporters[i].transporter_routes_arr[j].to_city.toLowerCase() === to_city.toLowerCase() &&
                  transporters[i].transporter_routes_arr[j].to_state.toLowerCase() === to_state.toLowerCase()
                ) {
                  arr.push(transporters[i]);
                  break;
                }
              }
            }
            setTransporters(arr);
          }}
        >Search</button>
      </div>
      <hr />



      "Displaying following transports based on your Business location (by default)"



      {
        (transporters.length > 0) ? transporters.map(t =>
          <Card className="my-3" key={t._id} >
            <Card.Body>

              <div className="d-flex align-items-start justify-content-between">
                <div>
                  <h5 className="text-primary text-capitalize">{t.transporter_driver_name}</h5>
                  <p className="text-capitalize" style={{ fontSize: "14px" }}>({t.transporter_name})</p>
                </div>
                <Button variant="outline-success"
                  onClick={() => {
                    set_booking({ "transporterId": t._id, "bizId": user._id }).then(data => alert(data.message));
                  }}
                >Book</Button>
              </div>

              <hr style={{ marginBottom: "2px" }} />
              <div className="mb-2 text-underline">Preferred Routes :</div>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>From</th>
                    <th>To</th>

                  </tr>
                </thead>
                <tbody>
                  {t.transporter_routes_arr.map(
                    (route) =>
                      <tr>
                        <td>{route.from_city},{route.from_state}</td>
                        <td>{route.to_city},{route.to_state}</td>

                      </tr>

                  )}

                </tbody>
              </Table>

            </Card.Body>
          </Card>
        ) : <b><br />Not Available..</b>
      }




    </div>
  )
}

export default BizDashboard