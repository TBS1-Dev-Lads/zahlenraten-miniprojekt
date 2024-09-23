# syntax=docker/dockerfile:1
FROM node:alpine as build
WORKDIR /web
COPY ./web /web
RUN npm install
RUN npm run build

FROM python:3.10-alpine
COPY ./ /code
COPY --from=0 /web /code/web
ENV FLASK_APP=app.py
WORKDIR /code
ENV FLASK_RUN_HOST=0.0.0.0
RUN apk add --no-cache gcc musl-dev linux-headers
EXPOSE 5000
# COPY . .
RUN pip install -r /code/requirements.txt
CMD ["flask", "run", "--debug"]
