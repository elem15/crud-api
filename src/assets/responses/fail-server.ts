import { ServerResponse } from 'http';

export default (res: ServerResponse): void => {
  res.writeHead(500);
  res.end('Sorry, an internal server error has occurred');
}