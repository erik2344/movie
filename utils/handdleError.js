const handdleHttpError = (res, message = "SOMETHING HAPPENED", code = 403) => {
    res.status(code),
    res.status({ error: message });
};

module.exports = { handdleHttpError };