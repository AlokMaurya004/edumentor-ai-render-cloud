#!/usr/bin/env bash
set -e

docker build -t edumentor-ai .
docker run --rm -p 8000:8000 --env-file .env edumentor-ai
