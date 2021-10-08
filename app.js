// Traigo las rutas
const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/controller', userRoutes);

module.exports = app;
