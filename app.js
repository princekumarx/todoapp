const express = require('express');
const bodyparser = require('body-parser');
const todoController = require('./controllers/todoapp');
const app = express();


//set up template engine
todoController(app);
app.set('view engine','ejs');

//status 

app.use(express.static('./public'));

app.listen(process.env.PORT || 3000,console.log('u are listening 3000'));