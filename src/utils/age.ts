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

export const ageToDateString = ({ age, firstDay = false }: { age: number; firstDay?: boolean }) => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - age);

  if (firstDay) {
    date.setMonth(0);
    date.setDate(1);
  }
  return date.toISOString().split('T')[0];
};

export const birthToAge = ({ birth }: { birth: string }) => {
  const date = new Date(birth);
  const today = new Date();
  return today.getFullYear() - date.getFullYear();
};
