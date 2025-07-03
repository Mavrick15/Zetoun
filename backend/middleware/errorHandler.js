// errorHandler.js
const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log de la trace de l'erreur

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack, // Afficher la stack en développement uniquement
  });
};

module.exports = errorHandler;
