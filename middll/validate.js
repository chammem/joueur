const yup=require('yup')

async function validateuser(req,res,next) {
    try{
        
        const Schema = yup.object().shape({
            username: yup.string()
            .matches(/^[A-Z]/).required(),
           
            email: yup.string().email()
            .matches(/@esprit.tn/).required(),
            cin: yup.number().required(),
        });
        
        
        await Schema.validate(req.body);
        next();

    }catch(err){
        res.status(400).send(err);
    }

    
}

async function validateResidance(req,res,next) {
    try{
        
        const Schema = yup.object().shape({
             name: yup.string()
            .matches(/^[A-Z]/).required(),
           
            surface: yup.number().required(),
            status: yup.boolean().required(),
        });
        
        
        await Schema.validate(req.body);
        next();

    }catch(err){
        res.status(400).send(err);
    }

    
}

module.exports={validateuser,validateResidance}
