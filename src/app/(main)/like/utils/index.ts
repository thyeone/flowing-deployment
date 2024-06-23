export const getDday = (endDay: string) => {
  const dday = Math.floor(
    (new Date(endDay).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24),
  );
  return dday > 0 && dday;
};
