export const cutAddress = (address: string, type = '구') => {
  return address.substring(0, address.indexOf(type) + 1);
};
