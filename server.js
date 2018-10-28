const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require("./config/Key").mongoKey;
const route = require('./routes/route');
const axios =require('axios');
const cors = require('cors');

const app = express();
const Item = require('./models/Item');

//body parser + Cors
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const port = 5000;

//Get 3rd Party API 
app.get('/getgame', (req, res) => {
  const URL = 'http://api.crackwatch.com/api/games';
  axios
    .get(URL)
    .then(function(response) {
      res.send(response.data);
      res.status(200).json(response);
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Connect to mongooseDB
 mongoose
  .connect(
   db, { useNewUrlParser: true })
  .then(() => {
     console.log('Connected to mongodb...');
   })
   .catch(error => {
     console.log('MongoDB connected error' + error);
   });

//Get Mongo DB data
   app.get('/getsavedgames', (req, res) => {
    Item.find()
     .then(game => {
       res.send(game);
       res.status(200),json(game);
     })
     .catch (error => {
       res.status(404).json(error);
     })
   })

   app.post('/getsavedgames', (req, res) => {
     const array = [{
      title: req.body.title,
      link: req.body.link,
      image: req.body.image,
      releaseDate: req.body.releaseDate,
      originalPrice: req.body.originalPrice,
      ratings: req.body.ratings
     }];
     console.log(array);
     Item.insertMany(array)
     .then (res => {
        res.send(res);
        res.status(200).json(res);
     })
     .catch (error => {
       res.status(404).json(error);
     });
   })


  app.post('/getsavedgames/delete', (req, res) => {
    console.log(req.body.title);
    const query = {
      title : req.body.title
    };
    Item.deleteOne(query)
    .then(res=>{
      res.send(res);
      res.status(200).json(res);
    })
    .catch(err=>{
      res.status(400).json(err);
    });
  })

   app.listen(port, () => {
    console.log(`Connecting to port ${port}...`);
  });
