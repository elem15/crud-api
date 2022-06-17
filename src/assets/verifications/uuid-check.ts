import { validate } from "uuid";
export default (id: string): boolean => {
  if (validate(id)) {
    // if(/^[0-9A-F]{8}-[0-9A-F]{4}-[1][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(num)) {
    return false;
  }
  return true;
}