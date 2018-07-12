/* eslint-env browser */

if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then(registration => console.log("service worker registered!"))
      .catch(err => console.log("failed to register service worker!"));
  });
}
