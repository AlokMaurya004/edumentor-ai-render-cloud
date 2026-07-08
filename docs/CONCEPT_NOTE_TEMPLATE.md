# Project Concept Note

## Project Title

**EduMentor AI: An AI-Powered Learning and Quiz Assistant**

## Application Name

**EduMentor AI**

## Problem Statement / Objective

Many students struggle to understand technical topics quickly, revise concepts before exams, and generate practice questions for self-assessment. Traditional study material is often lengthy, scattered, or difficult to understand. The objective of EduMentor AI is to provide a simple AI-powered web application where students can enter any academic topic and receive easy explanations, key points, examples, quizzes, viva questions, summaries, and study plans in real time.

## Target Users and Use Case

The primary users are school and college students preparing for exams, assignments, viva, and interviews. A user can enter a topic such as DBMS Normalization, Python OOP, Cloud Computing, or Operating System Scheduling and choose the required output mode.

## Cloud Deployment Platform

The application is deployed using Render Cloud as an equivalent cloud hosting platform because the AWS free trial account did not support the required deployment workflow. The application still uses Docker containerization, environment variables, and a public HTTPS URL.

## LLM Model and API Used

The application uses the OpenAI API through a FastAPI backend server. The API key is stored securely as an environment variable and is never exposed in frontend code.

## Key Features

- Responsive frontend interface
- FastAPI backend
- Secure LLM API integration
- Streaming response display
- Multiple academic modes
- Docker containerization
- Render Cloud deployment
- Mobile and desktop support

## Expected User Experience and Outcomes

The user opens the web application, enters a topic, selects a learning mode, and receives a live AI-generated response progressively on the screen. The expected outcome is faster learning, better revision, improved quiz practice, and a more interactive study experience.

## Live AWS Application URL

Paste your live URL here:

```text
https://your-app-url.awsapprunner.com
```
