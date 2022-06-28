export type newUser = {
  username: string;
  age: number;
  hobbies: string[];
};
export type fullUser = newUser & {
  id: string;
}