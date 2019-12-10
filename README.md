# Ecommerce-mern-stack

## Requisitos

- Tener instalado Node js y git
- Tener instalado una base de datos mysql y Mysql Workbench

## Pasos

1. Clonar el proyecto
2. En la terminal (a nivel de package.json) correr el comando npm install --save
3. Dentro de la carpeta config editar el config.json con las credenciales de la base datos en el entorno de desarrollo (development)
4. En la terminal (a nivel de package.json) correr el comando npm run dev:
  -El orm mapeará las clases a tablas en la bd
5. En la carpeta dbscripts se encuentran los scripts para generar usuarios, productos y categorias. Simplemente correr estos scripts en MysqlWorkbench para popular las tablas. 
