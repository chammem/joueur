const Residence = require("../models/residence");

async function add (req,res) {
    try{
        console.log(req.body)
        const residence = new Residence(req.body);
        await residence.save();
        res.status(200).json(residence)
        console.log(residence)
    }catch(err)
    {
        console.log(err)
    }
    
};

module.exports = {add}