const mongoose = require('mongoose');

const { Schema } = mongoose;

// Estoy declarando tipo de videojuegos, año y fecha
const videojuegosSchema = new Schema({
  title: { type: String },
  year: { type: Date },
});

module.exports = mongoose.model('Videojuegos', videojuegosSchema);
