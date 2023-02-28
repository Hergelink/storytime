const path = require('path');
const express = require("express");
const dotenv = require('dotenv').config({path: "./server/.env"});

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/openai', require('./routes/openaiRoutes'));


  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });



  
