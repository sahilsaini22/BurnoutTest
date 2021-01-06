const express = require('express');
const router = express.Router();
const plant = require('../models/plant');

router.get('/',(req,res)=>{
    plant.find()
    .sort({date: -1})
    .then(items=>res.json(items));
});





router.post('/',(req,res)=>{
    const newPlant = new plant({
        name: req.body.name,
        price: req.body.price,
        type: req.body.type,
        new: req.body.new,
        edible: req.body.edible,
        danger: req.body.danger,
        dangertext: req.body.dangertext,
        description: req.body.description,
        img_path: req.body.img_path
    });

    newPlant.save().then(plant=>res.json(plant));

        
});


router.delete('/:id',(req,res)=>{
    plant.findById(req.params.id)
    .then(plant=>plant.remove().then(()=>res.json({success: true})))
    .catch(err => res.status(404).json({success: false}));
});
    

router.put('/:id',(req,res)=>{
    try{
        const plants =  plant.findByIdAndUpdate(req.params.id,
            {
                name: req.body.name,
                price: req.body.price,
                type: req.body.type,
                new: req.body.new,
                edible: req.body.edible,
                danger: req.body.danger,
                dangertext: req.body.dangertext,
                description: req.body.description,
                img_path: req.body.img_path 
            }
            );
        if(plants==null)
        {
            throw Error('no plants available');
        }
        else
        {          
               res.status(200).json({success: true})                    
          
        }
        
    }
    catch(e){
        res.status(400).json({msg: e.message})

    }

});



module.exports =router;


