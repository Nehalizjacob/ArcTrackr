import User from  '../Model/userModel.js'


const register =async(req,res)=>{
    const{name,email,password}=req.body
    try{
const userExists=await User.findOne({email});
if(userExists){
    return res.status(400).json({message:"user exists"})
}
const user=await User.create({
    name,email,password
})
if(user)
    res.status(201).json({
        id:user._id,
        name:user.name,
        email:user.email,
        message:"User registered successfully"
    })
    else{
        res.status(400).json({message:"Invalid userdata"})

    }
}

   catch(error){ 
    res.status(500).json({message:"Server error",error:error.message})

   }
}


export{register}