const express = require('express');
const router= express.Router();
const residenceController = require ('../controller/residenceController');
const validate = require("../middll/validate")

router.post("/add" ,validate.validateResidance , residenceController.add);
module.exports = router;