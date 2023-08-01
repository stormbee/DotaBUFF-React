export const searchByHeroName = (heroes, searchValue) => {
  return heroes.filter((hero) =>
    hero.name_loc.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const searchByItemName = (items, searchValue) => {
  return items.filter((item) =>
    item.name_loc.toLowerCase().includes(searchValue.toLowerCase())
  );
};
