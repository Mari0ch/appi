const express = require('express');
app = express();
mongoose = require ("mongoose");

var routes = express.routes();
const userRoutes = require('/routes/userRoutes');
const app = express();

app.use(express.urlencoded(({extended: false})));
app.use(express.json());
app.use('controller',userRoutes);

//Routes
app.use(require('./routes/userRoutes'));
app.use(require('./controllers/userController'));
app.use(require('./controllers/routerController'));
app.use(require('./models/userModel'));

app.listen(3000, function (){
    console.log('The server is in the port 3000');
});

module.exports = app;