FROM nginx:latest

COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html

# COPY --from=build /app/build /usr/share/nginx/html
