module.exports = (res) => {
  res.writeHead(500);
  res.end('Sorry, an internal server error has occurred');
}