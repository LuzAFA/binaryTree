# binaryTree
 
Bienvenido y gracias por visitar mi codigo. 

Este es un Api Rest en el cual se permite crear y almacenar arboles binarios, para cada arbol y con base a dos nodos 
retornar al ancestro común más cercano de dichos nodos. 

Dicho Api REST esta desarrollado en MEAN stack, a continuacion se explica la ejecucion del mismo de forma local

recuerde que debe contar con Angular CLI: 8.0.4+, Node: 10.15.3+ y MongoDB en su sistema para poder ejecutarle. 

 
 
**BACK-END**

Para ejecutar el back-end del proyecto debe contar con las librerias express y body-parser en su sistema, 
si no las tiene puede instalarlas ejecutando el siguiente comando en una terminal dentro de la carpeta back-end del proyecto:  
`npm install express body-parser mongoose --save`

para ejecutar el api rest utilice el comando  dentro de la carpeta back-end del proyecto

`node server` 


Para poder ejecutar las pruebas unitarias y de integracion se debe contar con las librerias mocha, chai y chai-http, 
si no las tiene puede instalarlas con los siguientes comandos
 
`npm install mocha --save` para instalar mocha,
`npm install chai --save` para instalar chai y
`npm install chai-http` para instalar chai-http

para ejecutar las pruebas debe correr el sigiente comando en una terminal dentro de la carpeta back-end del proyecto
`npm test`


**FRONT-END**

En el front-end se utiliza la libreria vis.js para la visualizacion de los grafos por esto debe estar en el sistema, 
para descargarla basta con ejecutar el siguiente comando dentro de la carpeta front end del proyecto
`npm install vis`
este front-end esta desarrollado en el framework ANGULAR8, por ello para ejecutar el front-end basta con correr  en una terminal dentro de la carpeta front-end del proyecto, el comando 
`ng serve`, esperar unos segundos y abrir en un navegador el enlace http://localhost:4200/

