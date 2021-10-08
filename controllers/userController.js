// Controladores de archivo
const Videojuegos = require('../models/userModel');

// Recoger todos los tipos de juegos (GET)
function findByIdgame(req, response) {
  Videojuegos.findById(req.params.id, (err, vgame) => {
    if (err) return response.status.send(400, err.message);
    return response.status(200).send(vgame);
  });
}

// Ahora añadimos nuevos objetos(POST)
function addvideojuego(req, response) {
  // creamos los objetos añadiendo sus datos y tipo
  const nuevoJuego = new Videojuegos(req.body);
  // guardamos nuestros nuevos objetos
  nuevoJuego.save((err, newJuego) => {
    if (err) return response.status(400).send(err.message);
    return response.status(200).send(newJuego);
  });
}

module.exports = {
  findByIdgame,
  addvideojuego,
};
