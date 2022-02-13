const mongoose=require('mongoose');
const Schema = mongoose.Schema;

const Biz = new Schema({
    biz_email:String,
    biz_name:String,
    biz_city:String,
    biz_state:String,
    biz_mobile:String,
    biz_nature:String,
    biz_capacity:Number,
    biz_password:String,
    biz_otp:String
});


module.exports = mongoose.model('Bizs', Biz); 