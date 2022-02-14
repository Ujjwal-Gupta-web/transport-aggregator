const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
    bizId: String,
    biz_name:String,
    biz_city:String,
    biz_state:String,
    biz_email: String,
    biz_mobile: String,
    biz_nature: String,
    biz_capacity: Number,
    transporterId: String,
    status: String,
    time: Number
});


module.exports = mongoose.model('Bookings', Booking); 