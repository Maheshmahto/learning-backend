import { User } from "../Models/User.js";

export const userRegister= async(req,res)=>{
      console.log(req.body)

    try {
        let user=await User.create(req.body);
        res.json({
            message:'user created succesfully...',
            Newuser:user,
            success:true

        });
         
        
    } catch (error) {
        res.json({message:error.message})
        console.log(error)
    }

 }