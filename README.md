# EduMentor AI

EduMentor AI is a full-stack AI-powered learning and quiz assistant built for the **Vibe Coding: Building & Deploying an AI Web Application on AWS** project.

It includes:

- Responsive frontend using HTML, CSS, and JavaScript
- FastAPI backend
- Secure OpenAI API integration
- Streaming AI response
- Docker containerization
- AWS App Runner deployment support

---

## 1. Project Structure

```text
edumentor-ai/
│
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── docs/
│   ├── AWS_DEPLOYMENT_STEPS.md
│   ├── CONCEPT_NOTE_TEMPLATE.md
│   ├── PROJECT_REPORT_TEMPLATE.md
│   └── PROMPTING_STRATEGY.md
│
├── scripts/
│   ├── docker-build-run.sh
│   └── ecr-push-template.sh
│
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .env.example
├── .gitignore
└── README.md
```

---

## 2. Local Setup

### Step 1: Create `.env`

Copy `.env.example` and rename it to `.env`.

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
copy .env.example .env
```

Now open `.env` and add your real OpenAI API key.

```env
OPENAI_API_KEY=your_real_key_here
DEMO_MODE=false
```

For testing UI without a real API key:

```env
DEMO_MODE=true
```

---

## 3. Run Without Docker

Install dependencies:

```bash
pip install -r app/requirements.txt
```

Run FastAPI:

```bash
uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

---

## 4. Run With Docker

Build image:

```bash
docker build -t edumentor-ai .
```

Run container:

```bash
docker run -p 8000:8000 --env-file .env edumentor-ai
```

Open:

```text
http://localhost:8000
```

---

## 5. Run With Docker Compose

```bash
docker compose up --build
```

Open:

```text
http://localhost:8000
```

---

## 6. AWS App Runner Deployment Summary

1. Create AWS Budget Alert.
2. Create Amazon ECR repository named `edumentor-ai`.
3. Build Docker image.
4. Push image to ECR.
5. Create AWS App Runner service from ECR image.
6. Set port to `8000`.
7. Add environment variables:
   - `OPENAI_API_KEY`
   - `OPENAI_MODEL`
   - `DEMO_MODE=false`
8. Deploy and copy public HTTPS URL.

Full steps are available in:

```text
docs/AWS_DEPLOYMENT_STEPS.md
```

---

## 7. API Endpoints

### Home

```http
GET /
```

Serves the frontend.

### Health Check

```http
GET /health
```

Returns app status.

### Streaming AI Endpoint

```http
POST /api/stream
```

Request body:

```json
{
  "topic": "DBMS Normalization",
  "mode": "Explain Simply",
  "level": "college",
  "length": "medium"
}
```

---

## 8. Security Notes

- API key is used only in the backend.
- API key is never placed in frontend JavaScript.
- `.env` is ignored by Git.
- AWS App Runner environment variables should be used during deployment.

---

## 9. Submission Details

Final project title:

```text
EduMentor AI: A Cloud-Deployed AI Learning and Quiz Assistant Built Using Vibe Coding
```

Final deliverables:

1. Concept Note PDF
2. Project Report PDF
3. Live AWS App Runner URL
4. Source code or GitHub repository


---

## Render Cloud Deployment

This project can be deployed on Render Cloud when AWS free trial/App Runner is not available.

### Local run

```bash
copy .env.example .env
python -m pip install -r app/requirements.txt
python -m uvicorn app.main:app --reload
```

Open:

```text
http://127.0.0.1:8000
```

### Docker run

```bash
docker build -t edumentor-ai .
docker run -p 8000:8000 --env-file .env edumentor-ai
```

Open:

```text
http://localhost:8000
```

### GitHub push

```bash
git init
git add .
git commit -m "Initial commit - EduMentor AI"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/edumentor-ai.git
git push -u origin main
```

### Render environment variables

```text
APP_NAME=EduMentor AI
OPENAI_API_KEY=your_real_openai_api_key
OPENAI_MODEL=gpt-4o-mini
DEMO_MODE=false
```

Full guide:

```text
docs/RENDER_DEPLOYMENT_STEPS.md
```
