import { addNoneFavorited, removeNoneFavorited } from "./localstorage";

export function toggleEventListner(event: Event) {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;

  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);

  if (isChecked) {
    params.set("favorites", "true");
    removeNoneFavorited();
  } else {
    params.delete("favorites");
    addNoneFavorited();
  }

  const newUrl = `${url.pathname}?${params.toString()}`;
  window.history.pushState({}, "", newUrl);
}
