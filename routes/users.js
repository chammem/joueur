const express = require('express');
const router= express.Router();
const validate = require('../middll/validate')
const User = require('../models/user');
const userController = require ('../controller/userController.js')
router.get('/show',(req,res) => {
    res.send('salut 4twin9');
    
});
/*
router.get('/add/:username/:email/:cin',(req,res) => {
    new User({
        username:req.params.username,
        email:req.params.email,
        cin:req.params.cin
    }).save();
    res.send('salut good added');
    
});

router.post('/add',async(req,res) => {
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
    
});

router.get('/showuser',async (req,res) => {
    try{
        const user = await User.find();
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
});

router.get('/showbyid/:id',async (req,res) => {
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
});

router.get('/showbyusername/:username',async (req,res) => {
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

router.put('/update/:id',async (req,res) => {
    try{
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new :true});
        res.status(200).json(user);
        console.log(user)
    }catch(err)
    {
        console.log(err)
    }
    
});

router.delete('/delete/:id',async (req,res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send("deleted");
    }catch(err)
    {
        console.log(err)
    }
    
});

*/

router.post("/add",validate.validateuser , userController.add);
router.get("/chat",(req,res)=>{
    res.render("chat");
});

/*
router.get("showuser", userController.showuser);
router.get("showbyid/:id", userController.showbyid);
router.get("showUsername/:username", userController.showUserByname);
router.get("showUsersname/:username", userController.showUsersByname);
router.put("update/:id", userController.update);
router.delete("delete/:id", userController.deleteuser);*/

module.exports = router;