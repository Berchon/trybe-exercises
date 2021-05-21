
module.exports = (err, _req, res, _next) => {
  console.error(`Erro: ${err.message}`);

  const status = err.status ? err.status : 500;
  return res.status(status).json({ message: err.message });
};