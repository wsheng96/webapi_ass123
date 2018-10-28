const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db =
  'mongodb://weisheng:1234qwer@ds033487.mlab.com:33487/assignment_304cemwebapi';
const route = require('./routes/route');
const axios =require('axios');
const cors = require('cors');

const app = express();
const router = express.Router();
const Data = require('./models/Item');


//body parser
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use('./routes/route', route);

const port = process.env.PORT || 5000;

const ItemData = require('./models/Item');

//Get API key
app.get('/getgame', (req, res) => {
  const URL = 'http://api.crackwatch.com/api/games';

  axios
    .get(URL)
    .then(function(response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function(error) {
      console.log(error);
    });
});

//Connect to mongoose
 mongoose
  .connect(
   db,
       { userNewUrlParser: true }
   )
  .then(() => {
     console.log('Connected to mongodb...');
   })
   .catch(error => {
     console.log('MongoDB connected error' + error);
   });

   //Body-Parser + Cors
   app.use(cors());
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true}));

   //Get Mongo DB data
   app.get('/getGames', (req, res) => {
     Data.find()
     .then(game => {
       res.send(game);
       res.status(200),json(game);
     })
     .catch (error => {
       res.status(404).json(error);
     })
   })

   app.post('/getGames', (req, res) => {
     const array = [{
      title: req.body.title,
      link: req.body.link,
      image: req.body.image,
      releaseDate: reqbody.releaseDate,
      originalPrice: req.body.originalPrice,
      ratings: req.body.ratings
     }];
     Data.insertMany(array)
     .then (res => {
        res.send(res);
        res.status(200).json(res);
     })
     .catch (error => {
       res.status(404).json(error);
     });
   })

   app.listen(port, () => {
    console.log('Connecting...');
  });
