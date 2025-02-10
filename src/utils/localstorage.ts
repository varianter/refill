export function getFavoriteById(id: string) {
  const localstorageValue = localStorage.getItem("favorites");

  const parsedFavorites = localstorageValue
    ? JSON.parse(localstorageValue)
    : {};
  return !!parsedFavorites[id];
}

function getAllFavoriteIdsFromLocalStorage() {
  const favorites = localStorage.getItem("favorites");
  if (favorites) {
    const parsedFavorites = JSON.parse(favorites);
    const ids = Object.keys(parsedFavorites);
    return ids;
  }
  return [];
}

export function removeNoneFavorited() {
  const ids = getAllFavoriteIdsFromLocalStorage();
  Array.from(document.getElementsByClassName("card_wrapper")).forEach(
    (item) => {
      const isSaved = ids.find((id) => item.id === `card${id}`);
      if (!isSaved) {
        item.className = "card_wrapper__hidden";
      }
    },
  );
}
export function addNoneFavorited() {
  Array.from(document.getElementsByClassName("card_wrapper__hidden")).forEach(
    (item) => {
      item.className = "card_wrapper";
    },
  );
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
