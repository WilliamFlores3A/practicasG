# Utilización de docker con utilidades

Este proyecto está hecho en angular y nodejs, para poder ejecutarlo necesitamos tener instalado docker y docker-compose.

Para comenzar a trabajar en este proyecto necesitamos instalar las dependencias, con el siguiente comando.

> docker-compose run --rm npm install

Ahora para poder ejecutar el proyecto en modo desarrollo necesitamos ejecutar el siguiente comando. Esto nos va a levantar el servidor en el puerto 8080.

> docker-compose up -d --build server

También podemos acceder a CLI de angular ejecutando el siguiente comando.

> docker-compose run --rm ng

Aquí un ejemplo de generar un nuevo componente:

> docker-compose run --rm ng generate component foo

En la siguiente imagen podemos ver la interfaz de la aplicación 


![Captura de pantalla 2023-04-19 213929](https://user-images.githubusercontent.com/56658347/233243790-aa2308f8-c8e1-4554-9660-1fb7a3e36dab.png)



