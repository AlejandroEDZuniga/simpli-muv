# Challenge Simpli-Muv

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

##Configurar las variables de entorno


*MongoDB URL Local:

```

mongodb://localhost:27017/entriesdb
```
*Reconstruir los modulos de node y levantar app
```
pnpm install
pnpm run dev
```

## Llenar base de datos con informacion de pruebas

```
http://localhost:3000/api/seed
```

## URL para consultar Lead en base de datos:

```
http://localhost:3000/api/lead
```