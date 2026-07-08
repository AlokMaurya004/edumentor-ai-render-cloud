# Cloud Deployment Alternative Note

Originally, the project brief suggested AWS App Runner or equivalent cloud infrastructure. Because the AWS free trial account may not support the required App Runner/ECR workflow, this version uses **Render Cloud** as an equivalent container-based deployment platform.

## Updated Cloud Stack

| Requirement | Implementation |
|---|---|
| Containerization | Docker |
| Public deployment | Render Web Service |
| Public HTTPS URL | Render `onrender.com` URL |
| Environment variables | Render Environment Variables |
| Backend | FastAPI |
| Frontend | HTML/CSS/JavaScript |
| LLM API security | API key stored only on server side |

## Updated Architecture

```text
User Browser
     |
     v
Render Public HTTPS URL
     |
     v
Docker Container
     |
     v
FastAPI Backend + Static Frontend
     |
     v
OpenAI API
     |
     v
Streaming Response
```

## Report Line to Use

Due to limitations in the AWS free trial account, the application was deployed using Render Cloud as an equivalent container-based cloud service. Render supports Docker-based web services, public HTTPS URLs, and environment variables for secure API key management.
