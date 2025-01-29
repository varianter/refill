export function getFavoriteById(id: string) {
  const localstorageValue = localStorage.getItem("favorites");

  const parsedFavorites = localstorageValue
    ? JSON.parse(localstorageValue)
    : {};
  return !!parsedFavorites[id];
}

export function toggleFavoriteInLocalStorage(id: string) {
  const localstorageValue = localStorage.getItem("favorites");
  const updatedFavorites = localstorageValue
    ? JSON.parse(localstorageValue)
    : {};
  if (updatedFavorites[id]) {
    delete updatedFavorites[id];
  } else {
    updatedFavorites[id] = true;
  }
  localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
}
