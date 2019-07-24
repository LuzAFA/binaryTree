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

recuerde que si lo desea, puede utilizar el back-end sin necesidad de ejecutar el front-end por medio del uso de un navegador o un generador
de peticiones http como postman.

1. para la creacion de un arbol, realice una peticion POST a la url http://localhost:8080/bt/new  y como body de esta 
peticion un json con la siguiente estructura
`{`

`	"id": 4,`

`	"nodes":[`

`		{"id":1, "parent":-1},`

`		{"id":2, "parent":1},`

`		{"id":3, "parent":1},`

`		{"id":4, "parent":2}`

`		],`

`	"edges":[`

`		{"from":1, "to":2},`

`		{"from":1, "to":3},`

`		{"from":2, "to":4}`

`	]`

`}`

`
donde, en el campo id se guarda el identificador del arbol, en el campo nodes el id es el identificador del nodo y parent es el nodo padre, en el nodo raiz el padre debe ser -1;
en edges se representan los enlaces de nodos padre e hijo, el from es el nodo padre y el to es el nodo hijo. 

2. para listado de todos los arbles almacenados realice una peticion GET a la url http://localhost:8080/bt/trees

3. para conocer el ancestro comun mas cercano entre dos nodos genere una peticion POST a la url http://localhost:8080/bt/ancestor/id 
enviando como parametro id en el url el id con el que almaceno el arbol y como body de dicha peticion un json con la siguiente estructura  
`{
    "node1": idPrimerNodo,
    "node2": idSegundoNodo
}`
donde idPrimerNodo e idPrimerNodo corresponden al numero que le asigno a cada nodo como id 

3. para consultar un arbol especifico realice una peticion GET a la url http://localhost:8080/bt/tree/id 
donde id corresponde al identificador que le asigno al arbol como identificador

_Pruebas en back-end_

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

