export default (res, code, item) => {
  res.writeHead(code, { 'content-type': 'application/json' });
  res.end(`Sorry, this ${item} does not exist`);
}