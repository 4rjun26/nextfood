import User from "../../models/User";
import connectDb from "../../middleware/mongoose";
let ar=0;
const handler=async(req,res)=>{
        let users=await User.find({"username":"Arjun"});
        res.status(200).json({users})
        
}
export default connectDb(handler);