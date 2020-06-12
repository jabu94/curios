const express = require('express');
const ejs = require('ejs');
//const mongoose = require('mongoose');

//const database = require('./config/database')
//Importing routes files
//Under admin
//const dash = require('./routes/admin/dash');
//Under shop
//const shop = require('./routes/shared/shop');
//Under customer
//const customer = require('./routes/customer/customer');


//App Initialization
const app = express();

//View Engine
//app.use('ejs');
app.set('view engine', 'ejs');

//Set static folder
app.use( express.static('assets'));



//Db connections
/*mongoose.connect(database.database, { 
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  
  let db = mongoose.connection;
  //Check db connection
  db.once('open', function(){
    console.log('Connected to MongoDB');
  });
  
  // Check for db errors
  db.on('error', function(err){
    console.log(err);
  }); 
  */
  





//Set static folder
//app.use(express.static(path.join(__dirname, 'assets')))


//importing and Implementing route files
app.use('/', require('./routes/index'));
/*
//Under admin
const dash = app.use('/admin', dash);
//Under shop
const shop = app.use('/shared', shop);
//Under customer
const customer = app.use('customer', customer);
*/



//Set port and Start App
const PORT = process.env.PORT||5000;
app.listen(PORT, console.log('Server started on port'+  PORT));