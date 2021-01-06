const express=require('express');
const mongoose = require('mongoose');
const bodyParser=require('body-parser');

const plants =require('./routes/plants');
const questions =require('./routes/questions');
const answers =require('./routes/answers');

const morgan = require ('morgan');

const app=express();


app.use(morgan('dev'));
app.use(bodyParser.json());








mongoose
    .connect('mongodb+srv://demo2:demo2@taskdb.caiym.mongodb.net/test?retryWrites=true&w=majority')
    .then(()=>console.log('MongoDB ist verbunden...das ist mein eigener Text'))
    .catch(err=> console.log(err));



app.use('/plants', plants);
app.use('/questions', questions);
app.use('/answers', answers);


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server startet on port ${port}`));