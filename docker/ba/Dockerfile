FROM php:8.4

RUN apt-get update -y
RUN apt-get install -y git zip unzip openssl libonig-dev
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

WORKDIR /app
COPY ../../backend /app
RUN composer install

CMD php artisan serve --host=0.0.0.0 --port=8000
# 0.0.0.0 means all ips