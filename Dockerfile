FROM nginx:alpine
COPY src/index.html /usr/share/nginx/html/index.html
COPY src/main.js /usr/share/nginx/html/main.js
EXPOSE 80
CMD sh -c '\
cd /usr/share/nginx/html && \
envsubst < main.js > main.tmp.js && \
mv main.tmp.js main.js && \
nginx -g "daemon off;"'