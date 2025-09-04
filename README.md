import fetch from 'node-fetch';

const YT_API_KEY = process.env.YT_API_KEY;
const FB_PAGE_ID = process.env.FB_PAGE_ID;
const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

const CATEGORIES = [
  "live news global",
  "live news local",
  "trending today",
  "wild life documentary"
];

const MAX_VIDEOS = 5;

async function fetchYouTubeVideos(query, max = 5) {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${max}&q=${encodeURIComponent(query)}&key=${YT_API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items;
}

async function postToFacebook(message) {
  const url = `https://graph.facebook.com/${FB_PAGE_ID}/feed`;
  const res = await fetch(url, {
    method: 'POST',
    body: new URLSearchParams({
      message,
      access_token: PAGE_ACCESS_TOKEN
    })
  });
  return res.json();
}

function formatTextarea(video) {
  const vidId = video.id.videoId;
  const snip = video.snippet;
  return `
Title: ${snip.title}
Url: https://www.youtube.com/watch?v=${vidId}
Uploader: ${snip.channelTitle}
Date: ${snip.publishedAt}

Compiled By :
NJPWELDER
DADYMODE
CRAFTWITCH
DIRTYCODERS
BASHNOHASH

Friends in GitHub And Gitlab
  `;
}

export default async function handler(req, res) {
  try {
    for (let category of CATEGORIES) {
      const videos = await fetchYouTubeVideos(category, MAX_VIDEOS);
      for (let video of videos) {
        const message = formatTextarea(video);
        await postToFacebook(message);
        console.log(`Posted: ${video.snippet.title}`);
      }
    }
    res.status(200).json({ status: "done" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
