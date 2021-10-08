// Importo APP
const mongoose = require('mongoose');
const app = require('./app');

// Puerto
const port = process.env.PORT || 3000;
const db = process.env.MONGODB || 'mongodb://localhost/vgames';

mongoose.connect(db, (err) => {
  if (err) throw err;
  if (err) console.log('ERROR conectando a la base de datos.');

  app.listen(port, console.log('The server is in the port 3000'));
});
