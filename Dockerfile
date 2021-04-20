FROM nginx

COPY ./theme /usr/share/nginx/theme
COPY ./conf /etc/nginx/conf.d