const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Booking = new Schema({
    bizId:String,
    transporterId:String,
    time:Number
});


module.exports = mongoose.model('Bookings', Booking); 