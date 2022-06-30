
## Backend : Rest Service :exploding_head:
<p align="center"><a target="_blank"><img src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" width="200"></a></p>

## Conexión a BD con SQL2O en Java Spring

### Requirments
* Node js 
* Mongo DB
* Mongo DB Tools (optional for windows)

## Project setup

```
npm i
```

### Compiles and hot-reloads for development

```
npm start
```


### Compiles for production



### Mongo restore

To generate a backup of databases (You need Mongo Tools if you are using Windows) : 

mongodump --db collaboration-db

Y para restaurar esta única base de datos, ejecutamos el comando mongorestore pero esta vez con la opción --db  la ruta de la carpeta en donde se encuentra la base de datos que queremos restaurar:

mongorestore --db collaboration-db dump/collaboration-db
