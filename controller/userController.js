
const User = require("../models/user");
const Chat= require("../models/chat");


async function addchat (data) {
    try{
       // console.log(req.body)
        const chat = new Chat({msg:data.msg});
        await chat.save();
        //res.status(200).json(user)
       // console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
};

async function add (req,res) {
    try{
        console.log(req.body)
        const user = new User(req.body);
        await user.save();
        res.status(200).json(user)
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
};

/*
async function showuser (req,res)  {
    try{
        const user = await User.find();
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
};

async function showbyid (req,res)  {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
};

/*router.get('//:username',async (req,res) => {
    try{
        const username = req.params.username
        const user = await User.findOne({username});
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
});
*//*
async function deleteuser (req,res)  {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted");
    }catch(err)
    {
        console.log(err)
    }
    
}

async function deleteuser (req,res)  {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted");
    }catch(err)
    {
        console.log(err)
    }
    
};*/
module.exports = {addchat,add}