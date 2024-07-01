const routes = {
  "#/videos": renderVideosPage,
  "#/favorites": renderFavoritesPage,
};

function renderVideosPage() {
  fetch("video.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading the page: ", error);
      document.getElementById("app").innerHTML =
        "<h1>Error loading Videos Page</h1>";
    });
}

function renderFavoritesPage() {
  fetch("favorite.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((error) => {
      console.error("Error loading the page: ", error);
      document.getElementById("app").innerHTML =
        "<h1>Error loading Videos Page</h1>";
    });
}

function handleHashChange() {
  const hash = window.location.hash;
  const route = routes[hash];
  if (route) route();
  else renderHomePage();
}

function setupLinkEventListeners() {
  document.getElementById("link-videos").addEventListener("click", (event) => {
    event.preventDefault();
    renderVideosPage();
  });

  document
    .getElementById("link-favorites")
    .addEventListener("click", (event) => {
      event.preventDefault();
      renderFavoritesPage;
    });
}

window.addEventListener("load", () => {
    handleHashChange();
    setupLinkEventListeners();
});

window.addEventListener("hashchange", handleHashChange);

function renderHomePage() {
  throw new Error("Function not implemented.");
}
