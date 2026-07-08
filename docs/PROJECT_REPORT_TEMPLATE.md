# Project Report

## Project Title

**EduMentor AI: A Cloud-Deployed AI Learning and Quiz Assistant Built Using Vibe Coding**

---

## 1. Introduction

EduMentor AI is a full-stack AI-powered web application designed to help students understand academic topics, generate quizzes, prepare viva questions, summarize concepts, and create study plans. The project was developed using the Vibe Coding approach, where AI tools were used for idea generation, frontend design, backend development, debugging, Dockerization, and deployment planning.

---

## 2. Application Overview

EduMentor AI allows users to enter any topic and choose a learning mode. The application sends the topic to a secure backend server, which communicates with an external Large Language Model API. The generated response is streamed progressively to the frontend, creating a real-time AI experience.

---

## 3. Tech Stack

| Component | Technology Used |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | Python FastAPI |
| AI Integration | OpenAI API |
| Streaming | FastAPI StreamingResponse + Fetch API |
| Containerization | Docker |
| Deployment | Render Cloud Web Service |
| Image Registry | GitHub repository / Render Docker build |
| Security | Environment Variables |

---

## 4. Prompting Strategy

The application uses role-based and structured prompting. The AI is instructed to behave as an academic tutor and generate answers in a student-friendly format.

Sample prompt:

```text
You are EduMentor AI, a helpful academic tutor for students.
Explain the topic in simple language.
Use headings, bullet points, examples, and revision questions.
Topic: {topic}
Mode: {mode}
Student level: {level}
Answer length: {length}
```

---

## 5. Phase-by-Phase Development Summary

| Phase | Work Completed |
|---|---|
| Phase 1 | Selected project idea and defined features |
| Phase 2 | Designed frontend UI |
| Phase 3 | Built FastAPI backend |
| Phase 4 | Integrated OpenAI API |
| Phase 5 | Added streaming response |
| Phase 6 | Created Dockerfile |
| Phase 7 | Tested app locally |
| Phase 8 | Pushed Docker image to GitHub/Render Docker build |
| Phase 9 | Deployed app on Render Cloud |
| Phase 10 | Tested live URL on desktop and mobile |

---

## 6. Application Architecture

```text
User Browser
     |
     v
Frontend Interface
HTML / CSS / JavaScript
     |
     v
FastAPI Backend
     |
     v
OpenAI API
     |
     v
Streaming AI Response
     |
     v
User Interface
```

---

## 7. Challenges and Solutions

| Challenge | Solution |
|---|---|
| Keeping API key secure | Stored key in environment variables |
| Slow AI response | Added streaming output |
| Deployment complexity | Used Docker and Render Cloud |
| Mobile responsiveness | Used responsive CSS |
| LLM output quality | Improved prompt structure |
| Cost control | Configured AWS Budget Alert |

---

## 8. Security Best Practices

The API key is not present in frontend code or GitHub. The backend server reads the key from environment variables. The `.env` file is included in `.gitignore`, and Render Cloud environment variables are used during cloud deployment.

---

## 9. Key Learnings

Through this project, I learned how to conceptualize an AI application, use prompt engineering, build a full-stack web app, connect securely to an LLM API, stream responses, containerize the app using Docker, and deploy it on AWS cloud infrastructure.

---

## 10. Reflection

This project helped me understand how AI-assisted development can speed up the software development lifecycle. Instead of writing every line manually, I acted as an architect and creative director by guiding the AI through prompts, reviewing generated code, debugging issues, and making deployment decisions.

---

## 11. Live Application URL

Paste your live Render Cloud URL here:

```text
https://your-app-url.awsapprunner.com
```


---

## Cloud Deployment Alternative Justification

Due to limitations in the AWS free trial account, the application was deployed using Render Cloud as an equivalent container-based cloud service. Render supports Docker-based web services, public HTTPS URLs, and environment variables for secure API key management.
