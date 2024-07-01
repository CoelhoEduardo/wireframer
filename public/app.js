document.querySelector('.search').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-container input[type="text"]').value;
    fetchVideos(searchQuery);
})

function fetchVideos(query) {
    console.log('Fetching videos for query:', query);
}

function renderVideos(videos) {
    const container = document.createElement('div');
    container.className = 'video-container';
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        video.Item.className = 'video-content-cover';
        container.appendChild(videoItem);
    });
    document.querySelector('#app').innerHTML = '';
    document.querySelector('#app').appendChild(container);
}
