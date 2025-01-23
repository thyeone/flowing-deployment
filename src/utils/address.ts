export const cutAddress = (address: string) => {
  return address.split(' ').slice(0, 2).join(' ');
};
