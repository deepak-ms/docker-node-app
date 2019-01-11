  'use strict';

   const express = require('express');

  // Constants
   const PORT = 8080;
   const HOST = '0.0.0.0';
   const DB_HOST = process.env.DB_HOST;

   // App
   const app = express();
   app.get('/', (req, res) => {
    res.send('Hello world\n'+DB_HOST);  
   });

   app.listen(PORT, HOST);
   console.log(`Running on http://${HOST}:${PORT}`);
