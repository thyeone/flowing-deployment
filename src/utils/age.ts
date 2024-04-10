export const calculateAge = (birth: string) => {
  const today = new Date();
  const birthDate = new Date(birth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

export const getRangeOfAge = (birth: string) => {
  const age = calculateAge(birth);

  if (age >= 20 && age < 24) {
    return '20대 초반';
  }

  if (age >= 24 && age < 27) {
    return '20대 중반';
  }

  if (age >= 27 && age < 30) {
    return '20대 후반';
  }

  if (age >= 30 && age < 34) {
    return '30대 초반';
  }

  if (age >= 34 && age < 37) {
    return '30대 중반';
  }

  if (age >= 37 && age < 40) {
    return '30대 후반';
  }

  return `${age}세`;
};
