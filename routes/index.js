// Requerir el módulo express y el módulo 'Router'
const express = require('express');
const router = express.Router();
// Requerir el módulo 'fs'
const fs = require('fs');

// Definir la ruta base del router
const pathRouter = `${__dirname}`;

// Definir la función 'removeExtension' que elimina la extensión de un archivo
const removeExtension = (fileName) => fileName.split('.').shift();

// Leer todos los archivos del directorio 'pathRouter' y agregarlos como rutas en el router
fs.readdirSync(pathRouter)
  .filter((file) => !['index'].includes(removeExtension(file)))
  .forEach((file) => {
    const noExtension = removeExtension(file);
    router.use(`/${noExtension}`, require(`./${noExtension}`));
    console.log('ROUTES ->', noExtension);
});

// Configurar la ruta para cuando no se encuentre ninguna ruta previa
router.get('*', (req, res) => {
  res.status(404).send({ error: 'Not found' });
});

module.exports = router;