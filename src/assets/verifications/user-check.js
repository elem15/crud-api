export default (user) => {
  const length = Object.keys(user).length;
  if (length !== 3) {
    return false;
  }
  if (!(typeof user.username === 'string' 
    && typeof user.age === 'number' 
    && Array.isArray(user.hobbies))) {
      return false;
    }  
  for(const hobby of user.hobbies) {
    if(typeof hobby !== 'string') {
      return false;
    }
  }
  return true;
}