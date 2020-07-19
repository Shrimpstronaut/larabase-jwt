<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

## About Larabase-JWT

This project aims to create a foundation for future projects based on Laravel and JWT.
Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework. 
If you don't feel like reading, [Laracasts](https://laracasts.com) can help. Laracasts contains over 1500 video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

## Requirements
* composer
* php >7.4
* npm
* database (multiple supported: MySQL and Postgres tested)

## Setup

First install the required dependencies using
```
composer install
```

Next install the required frontend dependencies
```
npm install
```
## Configuration
Create a copy of `.env.example` and name it `.env`. This file will hold your application configuration.

Create and/or enter the database connection details inside your `.env` config.

<details>
    <summary>Sample config</summary>
    
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=laravel
    DB_USERNAME=root
    DB_PASSWORD=XXX
</details> 

Create a unique application key
```
php artisan key:generate
```

Next create a JWT secret
```
php artisan jwt:secret
```

Continue modifying the configuration to match your environment.

## Useful commands during development

Start a local development server using
```
php artisan serve
```
(add --host and --port to change parameters, **default: 127.0.0.1 port 8000**)

## Guides and Resources

### Laravel

[Official Laravel docs](https://laravel.com/docs/7.x)
### JWT

[Tymon jwt-auth (GitHub)](https://github.com/tymondesigns/jwt-auth)

### Guides
[Laravel 7 REST-API using JWT by Sapnesh Naik](https://codezen.io/laravel-7-rest-api-using-jwt-authentication/)
