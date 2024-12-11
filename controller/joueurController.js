const joueur = require("../models/joueur");
const Joueur = require("../models/joueur");

async function addJoueur(req, res) {
    try {
        console.log(req.body)
        const joueur = new Joueur(req.body);
        await joueur.save();
        res.status(200).send(`le Joueur a été ajouté avec succès : ${joueur.pseudo}`);
    } catch (err) {
        console.log(err)
    }
}
      

async function getalljoueur(req, res) {
    try {
        const joueurs = await Joueur.find(); 
        res.status(200).json(joueurs);
        console.log(joueurs)
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la récupération des joueurs.");
    }
}

async function getJoueurById(req, res) {
    try {
        const joueur = await Joueur.findById(req.params.id); 
        if (!joueur) {
            return res.status(404).send("Joueur non trouvé.");
        }

        res.status(200).json(joueur);
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la récupération du joueur.");
    }
}

async function deletejoueur(req, res) {
    try {
        const joueur = await Joueur.findByIdAndDelete(req.params.id); 
        if (!joueur) {
            return res.status(404).send("Joueur non trouvé.");
        }
        res.status(200).send("Joueur supprimé avec succès.");
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la suppression du joueur.");
    }
}

async function attaque(req, res) {
    try {
        const { attaquantId, victimeId } = req.params; 

        const attaquant = await Joueur.findById(attaquantId);
        const victime = await Joueur.findById(victimeId);

        victime.sante -= 20;
        attaquant.score += 10;

        const victimeUpdated = await Joueur.findByIdAndUpdate(
            victimeId,
            { sante: victime.sante },
            { new: true } 
        );

        const attaquantUpdated = await Joueur.findByIdAndUpdate(
            attaquantId,
            { score: attaquant.score },
            { new: true }
        );

        res.status(200).json({
            message: "Attaque réussie",
            attaquant: {
                pseudo: attaquantUpdated.pseudo,
                score: attaquantUpdated.score,
                sante: attaquantUpdated.sante
            },
            victime: {
                pseudo: victimeUpdated.pseudo,
                score: victimeUpdated.score,
                sante: victimeUpdated.sante
            }
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de l'attaque.");
    }
}



module.exports = { addJoueur, getalljoueur, getJoueurById, deletejoueur, attaque };