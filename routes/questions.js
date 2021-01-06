const express = require('express');
const router = express.Router();
const Question = require('../models/Question');


router.get('/', async (req, res) => {
    try {
      const questions = await Question.find();
      if (!questions) throw Error('No items');
  
      res.status(200).json(questions);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });


  router.post('/', async (req, res) => {
    const newQuestion= new Question({
      qqid: req.body.qqid,
      qtext: req.body.qtext,      
    });
  
    try {
      const question = await newQuestion.save();
      if (!question) throw Error('Something went wrong saving the item');
  
      res.status(200).json(question);
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  

module.exports =router;


