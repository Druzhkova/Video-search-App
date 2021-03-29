export const getSearchParams = (url) => {
  const searchParams = new URLSearchParams(url);
  const arrSearchParams = [];

  searchParams.forEach((value, key) => arrSearchParams.push({ value, key }));

  return arrSearchParams;
};
