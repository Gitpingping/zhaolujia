FROM nginx

WORKDIR /app

COPY . .

COPY /app/nginx.conf /usr/share/nginx/conf

COPY /app /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]