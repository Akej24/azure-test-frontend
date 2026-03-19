FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/main.js /usr/share/nginx/html/main.js
EXPOSE 80