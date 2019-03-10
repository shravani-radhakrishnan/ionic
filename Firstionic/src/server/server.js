const config = require('./config');
const express = require('express');
const fs = require('fs');
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const logger = require('morgan');
const methodOverride = require('method-override')
const cors = require('cors');
apiRouter = express.Router();
connection = mongoose.connect(config.database, { useMongoClient: true }),
gallery  = require('./models/gallery');
path = require('path'),
app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());
/*
  Manage size limits for POST/PUT requests
 */
app.use(bodyParser.json({limit: '10mb'}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));
/*
   Manage CORS Access for ALL requests/reponses
 */
app.use(function(req, res, next)
{
   /* Allow access from any requesting client */
   res.setHeader('Access-Control-Allow-Origin', '*');

   /* Allow access for any of the following Http request types */
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   /* Set the Http request header */
   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
    next();
});

/* Manage ALL Http GET requests to the specified route */
apiRouter.get('/gallery', function(req, res)
{
   /* Use the gallery model and access Mongoose's API to
      retrieve ALL MongoDB documents whose displayed field
      has a value of true */
   gallery.find({ displayed: true }, (err, recs) =>
   {

      /* If we encounter an error log this to the console */
      if (err)
      {
         console.dir(err);
      }

      /* Send the retrieve documents based as JSON encoded
         data with the Router Response object */
      res.json({ records: recs });

   });
});

/* Manage ALL Http POST requests to the specified route */
apiRouter.post('/gallery', function(req, res)
{

   /* Retrieve the posted data from the Request object and assign
      this to variables */
   var name 			=	req.body.name,
       description 		=	req.body.description,
       thumbnail 		=	req.body.thumbnail,
       displayed 		=	req.body.displayed,
       date 			=	Date.now();


   /* Use the gallery model to access the Mongoose API method to
      add the supplied data as a new document to the MongoDB
      database */
   gallery.create({ name 			: name,
   					description 	: description,
   					thumbnail 		: thumbnail,
   					displayed 		: displayed,
   					date 			: date },
   				 function (err, small)
   {

      /* If we encounter an error log this to the console*/
      if (err)
      {
         console.dir(err);
      }

      /* Document was successfully created so send a JSON encoded
         success message back with the Router Response object */
      res.json({ message: 'success' });

   });

});
/* Handle PUT requests with expected recordID parameter */
apiRouter.put('/gallery/:recordID', function(req, res)
{

   /* Use the gallery model to access the Mongoose API method and
      find a specific document within the MongoDB database based
      on the document ID value supplied as a route parameter */
   gallery.findById({ _id: req.params.recordID }, (err, recs) =>
   {

      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }
      else
      {
         /* Assign the posted values to the respective fields for the retrieved
            document */
      	 recs.name 				= req.body.name 		|| recs.name;
         recs.description 		= req.body.description 	|| recs.description;
         recs.thumbnail  		= req.body.thumbnail	|| recs.thumbnail;
         recs.displayed 		= req.body.displayed 	|| recs.displayed;

         /* Save the updated document back to the database */
         recs.save((err, recs) =>
         {
            /* If we encounter an error send the details as a HTTP response */
            if (err)
            {
               res.status(500).send(err)
            }

            /* If all is good then send a JSON encoded map of the retrieved data
               as a HTTP response */
            res.json({ records: recs });
         });
      }

   });
});

/* Handle DELETE requests with expected recordID parameter */
apiRouter.delete('/gallery/:recordID', function(req, res)
{

   /* Use the gallery model to access the Mongoose API method and
      find & remove a specific document within the MongoDB database
      based on the document ID value supplied as a route parameter */
   gallery.findByIdAndRemove({ _id: req.params.recordID }, (err, recs) =>
   {
      /* If we encounter an error we log this to the console */
      if (err)
      {
         console.dir(err);
      }

      /* If all is good then send a JSON encoded map of the removed data
         as a HTTP response */
      res.json({ records: recs });

   });
});

/* Mount the specified Middleware function based on matching path */
app.use('/api', apiRouter);
/* Open a UNIX socket, listen for connections to the specified port */
app.listen(config.port);