const{userController} = require ('express');
const userController = userController();

var moongose = require("moongose");
var Videojuegos = moongose.model("videojuegos");

//GET videojuegos
exports.findAllvideojuegos = function(req,res){
    Videojuegos.find(function(err,videojuegos){
        if (err) res.send(400,err.message);

        console.log('GET/videojuegos/'+ req.params.id);
        res.status(200).jsonp(videojuegos);
    });
};
//POST
exports.addvideojuegos = function(req, res){
console.log("POST");
console.log(req.body);

//Añadir nuevos juegos
var videojuegos = new videojuegos({
    title: req.body.title;
    year: req.body.year;
    genre: req.body.genre;
});
videojuegos.save(function (err, videojuegos){
    if (err) return.status(400).send(err.message);
    res.status(200).jsonp(videojuegos);
});
exports.sendvideojuegos = function (req,res){
    Videojuegos.find(function(videojuegos);
    res.send('Videojuegos');
});
};