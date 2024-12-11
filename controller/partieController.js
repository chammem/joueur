const Partie = require('../models/partie');
const Joueur = require('../models/joueur');

async function newpartie(req, res) {
    try {
        const { joueur1Id, joueur2Id } = req.body;
        const joueur1 = await Joueur.findById(joueur1Id);
        const joueur2 = await Joueur.findById(joueur2Id);
        const partie = new Partie({
            nom: req.body.nom,
            joueur_1: joueur1Id,
            joueur_2: joueur2Id,
            etat: 'en cours' 
        });

        await partie.save();
        res.status(200).json({
            message: 'Partie créée avec succès',
            partie
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de la partie.");
    }
}

async function newpartiesocket(data) {
    try {
        
        const partie = new Partie({
            nom: data.nompartie,
            joueur_1:data.id1,
            joueur_2:data.id2,
            etat: 'en cours' 
        });

        await partie.save();
       // res.status(200).json({
           // message: 'Partie créée avec succès',
          //  partie
       // });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur lors de la création de la partie.");
    }
}


async function affichersocket(data)  {
    try{
        const joueur1 = await Joueur.findById(data.id1);
        const joueur2 = await Joueur.findById(data.id2);
        
        //res.status(200).json(user);
        //console.log(user)
        return { j1:joueur1,j2:joueur2}
    }catch(err)
    {
        console.log(err)
    }
    
};
async function getAllParties(req, res) {
    try {
        const parties = await Partie.find();
        res.status(200).json(parties);
    } catch (err) {
        console.error('Erreur lors de la récupération des parties:', err);
        res.status(500).send('Erreur lors de la récupération des parties.');
    }
}

module.exports = { newpartie,getAllParties,newpartiesocket,affichersocket };

