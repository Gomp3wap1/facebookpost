import fetch from "node-fetch";

export default async function handler(req, res) {
  try {
    const LONG_LIVED_USER_TOKEN = process.env.LONG_LIVED_USER_TOKEN;
    const FB_APP_ID = process.env.FB_APP_ID;
    const FB_APP_SECRET = process.env.FB_APP_SECRET;
    const FB_PAGE_ID = process.env.FB_PAGE_ID;

    const extendUrl = `https://graph.facebook.com/v12.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&fb_exchange_token=${LONG_LIVED_USER_TOKEN}`;
    const extendRes = await fetch(extendUrl);
    const extendedData = await extendRes.json();
    const newUserToken = extendedData.access_token;

    const pageUrl = `https://graph.facebook.com/v12.0/me/accounts?access_token=${newUserToken}`;
    const pageRes = await fetch(pageUrl);
    const pageData = await pageRes.json();

    const pageToken = pageData.data.find(p => p.id === FB_PAGE_ID).access_token;
    console.log("New Page Access Token:", pageToken);

    res.status(200).json({ pageToken });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
