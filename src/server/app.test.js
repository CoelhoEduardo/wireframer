const { showSection, searchVideos } = require("../public/app");

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ items: [] }),
  })
);

describe("showSection", () => {
  beforeAll(() => {
    document.body.innerHTML = `
      <div id="videosSection" style="display: none;"></div>
      <div id="favoritesSection" style="display: none;"></div>
      <div id="favoritesCounter"></div>
    `;
  });

  it("should display videos section and hide favorites section", () => {
    showSection("videos");
    expect(document.getElementById("videosSection").style.display).toBe(
      "block"
    );
    expect(document.getElementById("favoritesSection").style.display).toBe(
      "none"
    );
  });

  it("should display favorites section and hide videos section", () => {
    showSection("favorites");
    expect(document.getElementById("videosSection").style.display).toBe("none");
    expect(document.getElementById("favoritesSection").style.display).toBe(
      "block"
    );
  });
});

describe("searchVideos", () => {
  beforeEach(() => {
    fetch.mockClear();
    document.body.innerHTML = '<input id="searchInput" value="test" />';
  });

  it("should call fetch with correct URL", async () => {
    await searchVideos();
    expect(fetch).toHaveBeenCalledWith("http://localhost:3000/videos?q=test");
  });
});
