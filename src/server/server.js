require("dotenv").config();
import express from "express";
import { get } from "axios";
import { join } from "path";

const app = express();
const PORT = 3000;
const baseApiUrl = "https://www.googleapis.com/youtube/v3";
const api_key = process.env.API_KEY;

app.use(express.static(join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "..", "public", "index.html"));
});

app.get("/videos", async (req, res) => {
  const searchQuery = req.query.q;
  const url = `${baseApiUrl}/search?part=snippet&q=${searchQuery}&maxResults=21&type=video&key=${api_key}`;
  try {
    const response = await get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    res.status(500).send("Error fetching data");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
