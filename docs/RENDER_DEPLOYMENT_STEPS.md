# Render Cloud Deployment Steps for EduMentor AI

Use this method when AWS App Runner/ECR is not available in your free trial account.

Deployment flow:

```text
Local Project → GitHub Repository → Render Web Service → Public HTTPS URL
```

---

## Step 1: Open Project Folder

```bash
cd edumentor-ai
```

---

## Step 2: Create `.env` File

For Windows CMD or PowerShell:

```bash
copy .env.example .env
```

If PowerShell gives any issue, use:

```powershell
Copy-Item .env.example .env
```

Now open `.env` and add your real OpenAI API key.

```env
APP_NAME=EduMentor AI
OPENAI_API_KEY=your_real_openai_api_key
OPENAI_MODEL=gpt-4o-mini
DEMO_MODE=false
```

For testing without API key:

```env
DEMO_MODE=true
```

---

## Step 3: Install Python Dependencies

```bash
python -m pip install -r app/requirements.txt
```

---

## Step 4: Run Locally

```bash
python -m uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

---

## Step 5: Test With Docker

Make sure Docker Desktop is running.

```bash
docker build -t edumentor-ai .
docker run -p 8000:8000 --env-file .env edumentor-ai
```

Open:

```text
http://localhost:8000
```

---

## Step 6: Initialize Git

```bash
git init
git add .
git commit -m "Initial commit - EduMentor AI Render deployment"
```

---

## Step 7: Create GitHub Repository

Create a GitHub repository named:

```text
edumentor-ai
```

Then run this command after replacing `YOUR_GITHUB_USERNAME`:

```bash
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/edumentor-ai.git
git push -u origin main
```

---

## Step 8: Deploy on Render

1. Open Render dashboard.
2. Create a new Web Service.
3. Connect your GitHub repository.
4. Select repository: `edumentor-ai`.
5. Select Docker runtime.
6. Keep branch: `main`.
7. Select free plan if available.
8. Add environment variables:

```text
APP_NAME=EduMentor AI
OPENAI_API_KEY=your_real_openai_api_key
OPENAI_MODEL=gpt-4o-mini
DEMO_MODE=false
```

9. Set health check path:

```text
/health
```

10. Deploy service.

---

## Step 9: Get Public URL

After deployment, Render gives a public HTTPS URL like:

```text
https://edumentor-ai.onrender.com
```

Use this URL in:

1. Concept Note
2. Project Report
3. Final submission

---

## Step 10: Update After Code Changes

Whenever you edit code:

```bash
git add .
git commit -m "Update EduMentor AI"
git push
```

Render will redeploy from GitHub.

---

## Common Issues

### Application failed to bind to port

The Dockerfile uses:

```bash
--port ${PORT:-8000}
```

This uses Render's dynamic port in cloud and `8000` locally.

### AI response not coming

Check Render environment variables:

```text
OPENAI_API_KEY
OPENAI_MODEL
DEMO_MODE=false
```

### `.env` uploaded to GitHub

This should not happen because `.gitignore` contains `.env`.
Never commit your real API key.
