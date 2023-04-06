import mongoose from 'mongoose';

const UserSchema= new mongoose.Schema({
    username: {type:String},
    password: {type:String}
  },{timestamps:true});
  mongoose.models={};
  module.exports=mongoose.User || mongoose.model('User',UserSchema)