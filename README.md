# Aplicacion de perritos

Esta app ha sido creada en una clase de la asignatura [Desarrollo de Aplicaciones para Internet](https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/desarrollo-aplicaciones-internetetecin), impartida en la [Universidad de Granada](https://www.ugr.es/) en el grado de [Ingeniería Informática](https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica)

La app simplemente hace una consulta a una API para solicitar una foto aleatoria de un perro, que después muestra en la página. 

Ha servido para practicar el uso de useState y useEffect, además del fetching de datos

En [main.jsx](./src/main.jsx) se usa strict mode. En desarrollo, el strict mode hace que se hagan dos peticiones a la api, por lo que si la aplicación se esta ejecutando en servidor de desarrollo, es mejor no usar strict mode. 

También se ha practicado con [react-bootstrap](https://react-bootstrap.netlify.app/)

## Como ejecutar la app
1. Clona el repositorio
2. Ejecuta ```npm install``` para instalar las dependencias
3. Ejecuta ```npm run dev``` para ejecutar en desarrollo
4. Ejecuta ```npm run build``` para crear la carpeta dist y a continuación ```npm run preview``` para ejecutar en producción