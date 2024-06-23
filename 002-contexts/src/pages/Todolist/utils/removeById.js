export const removeById = (tablica, id) => {
  return tablica.filter((elementTablicy) => elementTablicy.id !== id);
};
