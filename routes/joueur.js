const express = require('express');
const router= express.Router();
const joueurController = require('../controller/joueurController');

router.post("/newjoueur", joueurController.addJoueur);
router.get("/getalljoueur", joueurController.getalljoueur);
router.get("/getjoueur/:id", joueurController.getJoueurById);
router.delete("/deletejoueur/:id", joueurController.deletejoueur);
router.put("/attaque/:attaquantId/:victimeId", joueurController.attaque);

module.exports = router;