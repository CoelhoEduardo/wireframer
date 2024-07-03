let favorites = [];

function showSection(section) {
  document.getElementById("videosSection").style.display =
    section === "videos" ? "block" : "none";
  document.getElementById("favoritesSection").style.display =
    section === "favorites" ? "block" : "none";
  if (section === "favorites") {
    renderFavorites();
  }
}

function searchVideos() {
  const searchQuery = document.getElementById("searchInput").value;
  const url = `http://localhost:3000/videos?q=${searchQuery}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => renderVideos(data.items));
}

function formatISODateToReadable(dateISOString) {
  const date = new Date(dateISOString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

function renderVideos(videos) {
  const videosList = document.getElementById("videosList");
  videosList
    ? (videosList.innerHTML = "")
    : console.log('Element with ID "videoList" not found');
  videos.forEach((video) => {
    const date = formatISODateToReadable(video.snippet.publishTime);
    const videoElement = document.createElement("div");
    videoElement.innerHTML = `
                    <div class="video-content">
                        <div class="video-box">
                            <iframe width="360" height="180" src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div class="video-details"> 
                            <div class="detail">
                                <h3 class="title">${video.snippet.title}</h3>
                                <div class="channel-name">${video.snippet.channelTitle}</div>
                                <div class="upload-date">
                                    <div>${date}</div>
                                </div>
                            </div>
                        </div>
                        <div class="favorite-btn-content">
                            <button class="favorite-btn" data-video-id="${video.id.videoId}" onclick="toggleFavorite('${video.id.videoId}', '${video.snippet.title}')">Favoritar <i class="ri-star-fill"></i></button>
                        </div>
                    </div>`;
    videosList.appendChild(videoElement);
  });
}

function toggleFavorite(videoId, title) {
  const button = document.querySelector(`button[data-video-id="${videoId}"]`);
  if (button.classList.contains("favorited")) {
    button.innerHTML = 'Favoritar <i class="ri-star-fill"></i>';
    button.classList.remove("favorited");
  } else {
    button.innerHTML = 'Remover Favorito <i class="ri-star-fill"></i>';
    button.classList.add("favorited");
  }
  const index = favorites.findIndex((f) => f.id === videoId);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push({ id: videoId, title });
  }
  renderFavorites();
}

function renderFavorites() {
  const favoritesList = document.getElementById("favoritesList");
  favoritesList
    ? (favoritesList.innerHTML = "")
    : console.log('Element with ID "favoriteList" not found');
  document.getElementById(
    "favoritesCounter"
  ).textContent = `${favorites.length}`;
  favorites.forEach((favorite) => {
    const favoriteElement = document.createElement("div");
    favoriteElement.innerHTML = `
                    <div class="video-content">
                      <div class="video-box">
                          <iframe width="360" height="180" src="https://www.youtube.com/embed/${favorite.id}" frameborder="0" allowfullscreen></iframe>
                      </div>
                      <div class="video-details"> 
                          <div class="detail">
                              <h3 class="title">${favorite.title}</h3>
                          </div>
                      </div>
                      <div class="favorite-btn-content">
                          <button class="favorite-btn" onclick="toggleFavorite('${favorite.id}', '${favorite.title}')">Remover Favorito ⭐</button>
                      </div>
                    </div>
    `;
    favoritesList.appendChild(favoriteElement);
  });
}

module.exports = { showSection, searchVideos };
