const express = require('express');
const router = express.Router();
const Answer = require('../models/Answer');

router.get('/', async (req, res) => {
    try {
      const answers = await Answer.find();
      if (!answers) throw Error('No items');
  
      res.status(200).json(answers);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


  



module.exports =router;


