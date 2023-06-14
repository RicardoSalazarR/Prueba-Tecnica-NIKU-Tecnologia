# Prueba-Tecnica-NIKU-Tecnologia
Para ejecutar el proyecto ejecutar comando npm install en la terminal, seguido del comando npm run dev

Al iniciar el proyecto se mostrara un formulario para iniciar sesion como se muestra en la siguiente imagen
<img width="1440" alt="image" src="https://github.com/RicardoSalazarR/Prueba-Tecnica-NIKU-Tecnologia/assets/114715735/d8909767-6dcd-4e82-a58d-6ae1f2dadc32">

Ese login funciona comparando los datos ingresados con los almacenados en el archivo 'users.json' que se encuentra en la carpeta 'data' en la ruta raiz


<img width="1438" alt="image" src="https://github.com/RicardoSalazarR/Prueba-Tecnica-NIKU-Tecnologia/assets/114715735/9baf5183-473b-4a0e-b8d4-ac1692c79347">
Los datos de los usuarios estan almacenados en una objeto como en el siguiente ejemplo:
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "Contraseña1"
    }
Se deben ingresar las credenciales y en caso de que exista algun error, se muestra un alert con el error detectado, en caso de que las credenciales sean correctas, se muestra un alert dando la bienvenida al usuario:

<img width="1552" alt="image" src="https://github.com/RicardoSalazarR/Prueba-Tecnica-NIKU-Tecnologia/assets/114715735/730622ec-b197-4b79-b178-7290c1252a2e">

En la siguiente imagen se muestra un mensaje de bienvenida en la esquina superior izquierda y un reloj con la hora actual en la esquina superior derecha, ademas en el cuerpo de la pagina se muestran 10 imagenes obtenidas de la API publica con un diseño de carrusel
<img width="1508" alt="image" src="https://github.com/RicardoSalazarR/Prueba-Tecnica-NIKU-Tecnologia/assets/114715735/d7b53c3f-470e-4260-a107-7e21e002dab7">
