// Se define una función llamada handdleHttpError que recibe tres parámetros:
const handdleHttpError = (res, message = "SOMETHING HAPPENED", code = 403) => {
 // Se establece el código de estado HTTP que se devolverá al cliente
    res.status(code),
  // Se envía una respuesta JSON al cliente con el mensaje de error proporcionado
    res.status({ error: message });
};

module.exports = { handdleHttpError };