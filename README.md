Got it! I will make a **complete plain-text instruction** version—no code blocks, just step-by-step guidance with all the instructions, folder structure, and where to put things. You can follow it entirely as text.

---

# **Facebook Auto Post – Complete Plain Text Instructions**

---

## Step 1: Create Project Folder

1. On your computer, create a folder called `facebook-auto-post`.
2. Inside this folder, create another folder called `api`.
3. Inside `api`, you will place two files: `refreshToken.js` and `postVideos.js`.
4. In the root of `facebook-auto-post`, create these files: `package.json`, `.gitignore`, `.env.example`, `README.md`.

---

## Step 2: Folder Structure Overview

* facebook-auto-post/

  * api/

    * refreshToken.js
    * postVideos.js
  * package.json
  * .gitignore
  * .env.example
  * README.md

---

## Step 3: File Purposes

* `package.json`: Configuration for Node.js project and dependencies.
* `.gitignore`: Tells Git to ignore `node_modules` and `.env`.
* `.env.example`: Template for environment variables.
* `README.md`: Instructions and documentation.
* `api/refreshToken.js`: Script to refresh Facebook Page Access Token.
* `api/postVideos.js`: Script to fetch YouTube videos and post them to Facebook.

---

## Step 4: Prepare Environment Variables

1. Copy `.env.example` and create a new file named `.env`.
2. Fill in your credentials:

   * FB\_APP\_ID = your Facebook App ID
   * FB\_APP\_SECRET = your Facebook App Secret
   * LONG\_LIVED\_USER\_TOKEN = your long-lived user token
   * PAGE\_ACCESS\_TOKEN = your page access token (can be fetched via refreshToken.js)
   * FB\_PAGE\_ID = your Facebook page ID
   * YT\_API\_KEY = your YouTube Data API v3 key
3. Keep `.env` private; do not upload it to GitHub.

---

## Step 5: Prepare Files

* In `refreshToken.js`, write code to fetch a new page access token using the long-lived user token and your Facebook App credentials.
* In `postVideos.js`, write code to fetch YouTube videos from the categories: "live news global", "live news local", "trending today", "wild life documentary".
* Format the YouTube video information into a message that includes:

  * Title
  * URL
  * Uploader
  * Date
  * Compiled by:

    * NJPWELDER
    * DADYMODE
    * CRAFTWITCH
    * DIRTYCODERS
    * BASHNOHASH
  * Friends in GitHub and GitLab
* Post this message to your Facebook page using the Facebook Graph API and the page access token.

---

## Step 6: Prepare package.json

* Include Node.js 18.x as the engine.
* Include node-fetch dependency.
* Add a start script pointing to `node api/postVideos.js`.

---

## Step 7: Initialize Git and Upload to GitHub

1. Open a terminal inside the `facebook-auto-post` folder.
2. Run: `git init`
3. Run: `git add .`
4. Run: `git commit -m "Initial commit ready for GitHub and Vercel"`
5. Create a GitHub repository named `facebook-auto-post`.
6. Add the remote repository URL: `git remote add origin https://github.com/YOUR_USERNAME/facebook-auto-post.git`
7. Push your code: `git push -u origin main`

---

## Step 8: Deploy to Vercel

1. Go to Vercel.com and log in.
2. Click "New Project" → "Import Git Repository".
3. Select your GitHub repository `facebook-auto-post`.
4. Add the environment variables from your `.env` file in Vercel.
5. Click "Deploy".
6. Your serverless functions will be live at:

   * [https://your-vercel-project.vercel.app/api/postVideos](https://your-vercel-project.vercel.app/api/postVideos)
   * [https://your-vercel-project.vercel.app/api/refreshToken](https://your-vercel-project.vercel.app/api/refreshToken)

---

## Step 9: Schedule Automatic Posting

1. Use a cron service such as cron-job.org or Vercel's cron features.
2. Add a cron job with the URL: [https://your-vercel-project.vercel.app/api/postVideos](https://your-vercel-project.vercel.app/api/postVideos)
3. Schedule the cron job to run every 20 minutes.
4. You can set different time ranges for posting, e.g.:

   * 6:00 AM – 12:00 midnight
   * 1:00 AM – 6:00 AM

---

## Step 10: Test Locally (Optional)

1. Install dependencies: `npm install`
2. Run: `node api/postVideos.js`
3. Check your Facebook page to confirm the messages are posted correctly.

---

## Step 11: Visual Flow Diagram

Local Project Folder → GitHub Repository → Vercel (Serverless Functions) → Cron Scheduler (e.g., cron-job.org) → Facebook Page (auto-posted videos)

---

## Step 12: Notes

* Ensure your Facebook Page Access Token is valid and long-lived.
* Keep `.env` private; do not commit it to GitHub.
* You can modify the categories and the number of videos fetched in `postVideos.js`.
* For automatic posting, cron is required; serverless functions alone will not run on a schedule.

---

This is a **complete plain-text instruction guide**. You can follow it from creating folders, writing files, setting credentials, uploading to GitHub, deploying on Vercel, to scheduling automatic posts on your Facebook page.

---

