import User from "../../models/User";
import connectDb from "../../middleware/mongoose";

connectDb()

export default async function handler(req,res){
    
    const {username,password}=req.body
    const user=await User.findOne({username,password})
    if(!user){
        return res.json({status:"Not able to find"})
    }
    else{
        res.redirect(302,'/feed')
    }
}