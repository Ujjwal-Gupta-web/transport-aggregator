let nodemailer = require("nodemailer");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
const cors = require("cors");
const Biz = require("./models/Biz");
const Transporter = require("./models/Transporter");
const Booking = require("./models/Booking");
require('dotenv').config();
app.use(cors());
app.use(express.json());


const DB = process.env.DATABASE;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Database connected.");
}).catch((err) => {
    console.log("Database error");
    console.log(err);
});




// For Business Apis

app.post("/api/biz/getUser", async (req, res) => {
    let id = req.body.id;
    let biz = await Biz.findOne({ "_id": id });
    if (biz) {
        let obj = biz;


        return res.json({ "tag": true, "message": obj });
    }
    return res.json({ "tag": false });
})

app.post("/api/biz/signup", async (req, res) => {
    let { biz_email,
        biz_name,
        biz_city,
        biz_state,
        biz_mobile,
        biz_nature,
        biz_capacity,
        biz_password } = req.body;

    const result = await Biz.findOne({ biz_email });

    if (result) {
        return res.json({ "message": "User already exists", "tag": false })
    }
    else {

        var hash = bcrypt.hashSync(biz_password, 8);
        biz_password = hash;
        let biz_otp = hash;
        const biz = new Biz({
            biz_email,
            biz_name,
            biz_city,
            biz_state,
            biz_mobile,
            biz_nature,
            biz_capacity,
            biz_password,
            biz_otp
        })
        biz.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "SignUp Success", tag: true })
        })
    }
    // return res.json(obj);
})


app.post("/api/biz/login", async (req, res) => {
    const obj = req.body;
    const result = await Biz.findOne({ "biz_email": obj.biz_email });
    if (result) {
        bcrypt.compare(req.body.biz_password, result.biz_password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, 'transport_good_proj');
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }
})

app.post("/api/biz/login_otp", (req, res) => {
    const obj = req.body;
    return res.json(obj);
})

app.post("/api/biz/get_otp", async (req, res) => {
    const obj = req.body;
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    const result = await Biz.findOne({ biz_email: obj.biz_email });
    if (result) {

        result.biz_otp = val;
        result.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            email(obj.biz_email, "OTP", `Your Login OTP is ${val}`);
            res.json({ "message": "OTP sent", tag: true })
        })

    }
    else {
        return res.json({ "message": "Invalid", "tag": false })
    }
    // return res.json(obj);
})
app.post("/api/biz/verify_otp", async (req, res) => {
    const obj = req.body;
    const result = await Biz.findOne({ biz_email: obj.biz_email });
    if (result.biz_otp === req.body.otp) {
        const token = jwt.sign({ id: result._id }, 'transport_good_proj');
        return res.json({ "message": "Login success", "token": token, "tag": true })
    }
    else {
        return res.json({ "message": "Invalid OTP", "tag": false })
    }
})






// For Transporter Apis

app.post("/api/transporter/getUser", async (req, res) => {
    let id = req.body.id;
    let transporter = await Transporter.findOne({ "_id": id });
    if (transporter) {

        let obj = transporter;
        return res.json({ "tag": true, "message": obj });
    }
    return res.json({ "tag": false });
})

app.post("/api/transporter/getAll", async (req, res) => {

    let transporters = await Transporter.find();
    if (transporters.length > 0) {

        let obj = transporters;
        return res.json({ "tag": true, "message": obj });
    }
    return res.json({ "tag": false });
})

app.post("/api/transporter/signup", async (req, res) => {
    let { transporter_email,
        transporter_driver_name,
        transporter_name,
        transporter_truck_number,
        transporter_truck_capacity,
        transporter_experience,
        transporter_mobile,
        transporter_password,
        transporter_routes_arr } = req.body;

    const result = await Transporter.findOne({ transporter_email });

    if (result) {
        return res.json({ "message": "User already exists", "tag": false })
    }
    else {

        var hash = bcrypt.hashSync(transporter_password, 8);
        transporter_password = hash;
        let transporter_otp = hash;
        const transporter = new Transporter({
            transporter_email,
            transporter_driver_name,
            transporter_name,
            transporter_truck_number,
            transporter_truck_capacity,
            transporter_experience,
            transporter_mobile,
            transporter_password,
            transporter_routes_arr,
            transporter_otp
        })
        transporter.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            //console.log(document);
            return res.json({ "message": "SignUp Success", tag: true })
        })
    }
})
app.post("/api/transporter/login", async (req, res) => {
    const obj = req.body;
    const result = await Transporter.findOne({ transporter_email: obj.transporter_email });
    if (result) {
        bcrypt.compare(req.body.transporter_password, result.transporter_password, function (err, hashed) {
            if (hashed === true) {
                const token = jwt.sign({ id: result._id }, 'transport_good_proj');
                return res.json({ "message": "Login success", "token": token, "tag": true })
            }
            else {
                return res.json({ "message": "Login failed", "tag": false })
            }
        });
    }
    else {
        return res.json({ "message": "Login failed", "tag": false })
    }
})
app.post("/api/transporter/get_otp", async (req, res) => {
    const obj = req.body;
    var val = Math.floor(1000 + Math.random() * 9000);
    console.log(val);
    const result = await Transporter.findOne({ transporter_email: obj.transporter_email });
    if (result) {

        result.transporter_otp = val;
        result.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }
            email(obj.transporter_email, "OTP", `Your Login OTP is ${val}`);
            res.json({ "message": "OTP sent", tag: true })
        })

    }
    else {
        return res.json({ "message": "Invalid", "tag": false })
    }
    // return res.json(obj);
})
app.post("/api/transporter/verify_otp", async (req, res) => {
    const obj = req.body;
    const result = await Transporter.findOne({ transporter_email: obj.transporter_email });
    if (result.transporter_otp === req.body.otp) {
        const token = jwt.sign({ id: result._id }, 'transport_good_proj');
        return res.json({ "message": "Login success", "token": token, "tag": true })
    }
    else {
        return res.json({ "message": "Invalid OTP", "tag": false })
    }
})

// Bookings

app.post("/api/set_booking", (req, res) => {
    const { bizId,
        transporterId,
        biz_name,
        biz_city,
        biz_state,
        biz_email,
        biz_mobile,
        biz_nature,
        biz_capacity,
        status } = req.body;

    const d = new Date();
    let time = d.getTime();

    const booking = new Booking({
        bizId,
        transporterId,
        biz_name,
        biz_city,
        biz_state,
        biz_email,
        biz_mobile,
        biz_nature,
        biz_capacity,
        status,
        time
    })

    booking.save(function (error, document) {
        if (error) {
            console.error(error)
            return res.json({ "message": "try again", "tag": false })
        }

        return res.json({ "message": "Success", tag: true })
    })

})


app.put("/api/update_booking", async (req, res) => {
    const { _id, bizId,
        transporterId,
        biz_name,
        biz_city,
        biz_state,
        biz_email,
        biz_mobile,
        biz_nature,
        biz_capacity,
        status, time } = req.body;

    const booking = await Booking.findOne({ _id });
    const transporter = await Transporter.findOne({ "_id": transporterId });

    if (status === "Accepted") {
        booking.status = status;
        booking.save(function (error, document) {
            if (error) {
                console.error(error)
                return res.json({ "message": "try again", "tag": false })
            }

            return res.json({ "message": "Success", tag: true })
        })

        email(biz_email, "Booking Done - Check out the Details",
            `\nDriver Name : ${transporter.transporter_driver_name}\n
        Mobile : ${transporter.transporter_mobile}\n
        Transporter Name : ${transporter.transporter_name}\n
        Truck Number : ${transporter.transporter_truck_number}\n
        Truck Capacity : ${transporter.transporter_truck_capacity}\n
        `
        );

    }
    else {
        Booking.deleteOne({ _id }, function (err) {
            if (err) {
                //console.log(err);
                return res.json({ "message": "Some error occured try again", "tag": false })
            }
            else {
                return res.json({ "message": "Deleted", "tag": true })
            }
        });
    }
})

app.post("/api/get_bookings", async (req, res) => {
    const bookings = await Booking.find();
    if (bookings.length > 0) {

        let obj = bookings;
        return res.json({ "tag": true, "message": obj });
    }
    return res.json({ "tag": false });

})

app.listen(port, () => {
    console.log(`the server is up and running at port ${port}`);
})


app.get("/email", async (req, res) => {

    email("ujjgpta9@gmail.com", "booked", "these are the details");

    return res.json({ "status": "sent" })
});


async function email(to, subject, message) {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.myEmail,
            pass: process.env.myPass
        }
    });


    let details = {
        from: "tech.ujjwal.99@gmail.com",
        to: to,
        subject: subject,
        text: message
    };


    mailTransporter.sendMail(details, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("sent");
        }
    })
}