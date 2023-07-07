Entidades utilizadas para el programa: 


![i1 (1)](https://user-images.githubusercontent.com/56658347/236642922-06d50be1-b407-4ce4-95c2-8f4bd1fcfd66.png)

Imagen almacenada en la aplicación de Docker: 

![imagendocker ](https://user-images.githubusercontent.com/56658347/236643114-43f1f552-6cb4-4eae-bce4-5d9ad5ede8fa.png)


Imágenes Dockerfile y Dockerfile.old almacenadas con una etiiqueta en DockerHub:


![tagsimagenes](https://user-images.githubusercontent.com/56658347/236642939-bb3e76ee-b1d7-47a1-a9de-80ad2e8df19c.png)

Programa funcionando de forma local en el puerto 3000:3000:

![servidor local](https://user-images.githubusercontent.com/56658347/236642948-b49c4aa1-ebf6-48ca-a874-f5e5d20d2c92.png)

Para construir el docker utilizar el siguiente comando: 
docker build -t test

Y para ejecutarlo utilizar este:
docker run -p 3000:3000 test

