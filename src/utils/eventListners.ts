import { addNoneFavorited, removeNoneFavorited } from "./localstorage";

function setClassnameForTracksWithOneCard() {
  document.querySelectorAll(".track").forEach((track) => {
    const visibleCards = track.querySelectorAll(".card_wrapper");
    if (visibleCards.length === 1) {
      track.className = "track__single_card";
    }
  });
}

function setAllClassnamesToTrack() {
  document.querySelectorAll(".track__single_card").forEach((track) => {
    track.className = "track";
  });
}

function getUrlParams() {
  return new URL(window.location.href);
}

export function toggleEventListner(event: Event) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  if (isChecked) {
    params.set("favorites", "true");
    removeNoneFavorited();
    setClassnameForTracksWithOneCard();
  } else {
    params.delete("favorites");
    addNoneFavorited();
    setAllClassnamesToTrack();
  }

  const newUrl = `${url.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}

export function handleFavoriteChange(isChecked: boolean) {
  const url = getUrlParams();
  const showFavoritesOnly = url.searchParams.get("favorites") === "true";

  if (isChecked && showFavoritesOnly) {
    removeNoneFavorited();
    setClassnameForTracksWithOneCard();
  } else {
    addNoneFavorited();
    setAllClassnamesToTrack();
  }
}
