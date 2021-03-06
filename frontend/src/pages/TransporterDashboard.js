import React, { useEffect, useState } from 'react'
import { get_bookings, update_booking } from "../controllers/booking"
import { get_transporter } from "../controllers/transporter"
import { Card, Button, } from "react-bootstrap"

const BizDashboard = () => {

  let [bookings, setBookings] = useState([]);
  let [user, setUser] = useState({});

  useEffect(() => {
    get_transporter(JSON.parse(atob(localStorage.getItem("user").split(".")[1])).id).then(data => {
      if (data.tag === true) {
        setUser(data.message);
      }
    });
    get_bookings().then(data => {
      const d = new Date();
      let currentTime = d.getTime();
      if (data.tag) {
        let arr = data.message.filter(d => (JSON.parse(atob(localStorage.getItem("user").split(".")[1])).id === d.transporterId) && ((currentTime - 86400000) <= d.time));
        setBookings(arr);
      }


    })
  }, []);

  return (
    <div className='container'>

      <h3 className="text-center my-2 text-primary text-capitalize">Welcome , {user.transporter_driver_name} ({user.transporter_name})</h3>
      <hr />

      {
        (bookings) ? (bookings.length > 0) ? bookings.map(booking =>
          <Card className="my-3" key={booking._id} >

            <Card.Body>

              <div className="d-flex align-items-start justify-content-between">
                <div>


                  <h5 className="text-primary text-capitalize">{booking.biz_name}</h5>
                  <p className="text-capitalize" style={{ fontSize: "14px", fontWeight: 500 }}>({booking.biz_city} , {booking.biz_state})</p>
                </div>

                {(booking.status === "Pending") &&
                  <div>
                    <Button className='mx-2' variant="outline-success"
                      onClick={() => {
                        let obj = booking;
                        obj.status = "Accepted";
                        update_booking(obj).then(data => alert(data.message))
                      }}
                    >Accept</Button>
                    <Button variant="outline-danger"
                      onClick={() => {
                        update_booking(booking).then(data => alert(data.message))
                      }}
                    >Decline</Button>

                  </div>}
              </div>

              <div className='d-flex align-items-start justify-content-between'>
                <div>
                  <p className="text-capitalize" style={{ fontSize: "15px" }}>Nature of Material : {booking.biz_nature}</p>
                  <p className="text-capitalize" style={{ fontSize: "15px" }}>Capacity : {booking.biz_capacity} tons</p>
                </div>
                <div>
                  <span className={`badge bg-${booking.status === "Pending" ? "warning" : "success"}`}> {booking.status}</span>
                </div>
              </div>
            </Card.Body>
            <hr style={{ margin: "0" }} />

            <div className='m-3 d-flex align-items-start justify-content-between'>
              <div>
                <a className="btn btn-outline-primary"
                  href={`tel:${booking.biz_mobile}`}
                >Call</a>
              </div>
              <div>
                <span class="badge bg-secondary">{(new Date((booking.time))).getDate()} / {(new Date((booking.time))).getMonth() + 1} / {(new Date((booking.time))).getFullYear()}  ,  {(new Date((booking.time))).getHours()} : {(new Date((booking.time))).getMinutes()}</span>
              </div>
            </div>
          </Card>

        ) : <b><br />Not Available..</b> : ""
      }


    </div>
  )
}

export default BizDashboard