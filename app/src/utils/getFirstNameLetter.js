export const getFirstNameLetter = userName => {
  return userName
    .split(' ')
    .map(name => name[0])
    .join('');
};
