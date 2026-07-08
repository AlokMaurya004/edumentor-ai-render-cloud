# AWS Deployment Steps for EduMentor AI

This guide deploys EduMentor AI using:

```text
Docker → Amazon ECR → AWS App Runner
```

---

## Step 1: Create AWS Budget Alert

1. Open AWS Console.
2. Search for **AWS Budgets**.
3. Click **Create budget**.
4. Select **Cost budget**.
5. Set budget amount, for example `5 USD`.
6. Add your email address.
7. Create the budget.

---

## Step 2: Configure AWS CLI

Run:

```bash
aws configure
```

Enter:

```text
AWS Access Key ID
AWS Secret Access Key
Default region: ap-south-1
Output format: json
```

---

## Step 3: Create ECR Repository

Go to:

```text
AWS Console → Amazon ECR → Repositories → Create repository
```

Repository name:

```text
edumentor-ai
```

Keep it private.

---

## Step 4: Login to ECR

Replace `ACCOUNT_ID` with your AWS account ID.

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com
```

---

## Step 5: Build Docker Image

```bash
docker build -t edumentor-ai .
```

---

## Step 6: Tag Docker Image

```bash
docker tag edumentor-ai:latest ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/edumentor-ai:latest
```

---

## Step 7: Push Image to ECR

```bash
docker push ACCOUNT_ID.dkr.ecr.ap-south-1.amazonaws.com/edumentor-ai:latest
```

---

## Step 8: Create AWS App Runner Service

Go to:

```text
AWS Console → App Runner → Create service
```

Choose:

```text
Source: Container registry
Provider: Amazon ECR
Repository: edumentor-ai
Image tag: latest
```

Set:

```text
Port: 8000
CPU: lowest available
Memory: lowest available
```

Add environment variables:

```text
OPENAI_API_KEY = your_real_openai_api_key
OPENAI_MODEL = gpt-4o-mini
DEMO_MODE = false
```

Create service.

---

## Step 9: Copy Live URL

After deployment, App Runner will provide a public HTTPS URL like:

```text
https://xxxxx.ap-south-1.awsapprunner.com
```

Paste this URL into:

1. Concept Note
2. Project Report
3. Final submission form

---

## Step 10: Test Live App

Test in:

- Desktop browser
- Mobile browser
- Incognito/private window

Try these topics:

```text
DBMS Normalization
Python OOP
Cloud Computing
Operating System Scheduling
```
