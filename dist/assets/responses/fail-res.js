module.exports = (res, code, item) => {
  res.writeHead(code, { 'content-type': 'text/plain' });
  res.end(`Sorry, this ${item} does not exist`);
}