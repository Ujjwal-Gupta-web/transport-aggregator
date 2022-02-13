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


app.get("/", (req, res) => {
    return res.json({ "message": "here we go" });
})

// For Business Apis

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
    const result = await Biz.findOne({ biz_email });
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







// For Transporter Apis

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
    const result = await Transporter.findOne({ transporter_email:obj.transporter_email });
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
app.post("/api/transporter/login_otp", (req, res) => {
    const obj = req.body;
    return res.json(obj);
})



app.listen(port, () => {
    console.log(`the server is up and running at port ${port}`);
})


app.get("/email", (req, res) => {

    return res.json({ "message": "hum bhi email bhej denge" });

});

