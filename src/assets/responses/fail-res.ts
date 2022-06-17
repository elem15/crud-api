import { ServerResponse } from 'http';

export default (res: ServerResponse, code: number, item: string ): void => {
  res.writeHead(code, { 'content-type': 'text/plain' });
  res.end(`Sorry, this ${item} does not exist`);
}