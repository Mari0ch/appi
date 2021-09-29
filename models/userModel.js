var mongoose = require('mongoose');
Schema = mongoose.Schema;

//Estoy declarando tipo de videojuegos, año y fecha 
var videojuegosSchema = new Schema({
    title: {tyoe: String};
    year: {type: Number};
    genre: {
        type: String;
        enum: ["Accion","Aventuras","PVP"]
    };
});

module.exports = mongoose.moder('Videojuegos',videojuegosSchema);