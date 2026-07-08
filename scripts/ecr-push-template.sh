#!/usr/bin/env bash
set -e

# Replace these values before running:
ACCOUNT_ID="YOUR_AWS_ACCOUNT_ID"
REGION="ap-south-1"
REPOSITORY="edumentor-ai"

aws ecr get-login-password --region "$REGION" | docker login --username AWS --password-stdin "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com"

docker build -t "$REPOSITORY" .
docker tag "$REPOSITORY:latest" "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPOSITORY:latest"
docker push "$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$REPOSITORY:latest"
