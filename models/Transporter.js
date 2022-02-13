const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Transporter = new Schema({
    transporter_email:String,
    transporter_driver_name:String,
    transporter_name:String,
    transporter_truck_number:String,
    transporter_truck_capacity:Number,
    transporter_experience:Number,
    transporter_mobile:String,
    transporter_password:String,
    transporter_otp:String,
    transporter_routes_arr:Array
});


module.exports = mongoose.model('Transporters', Transporter); 