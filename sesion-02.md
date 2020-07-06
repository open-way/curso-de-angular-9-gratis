# BASE CON ANGULAR

Bienvenidos a la sesión 02 del *Curso de Angular 09 GRATIS*.

*Módulos*
- Anatomía de un módulo
- Generación de módulos

*Componentes*

- Anatomía de un componente
- Generación de componentes

*Visibilidad entre componentes*
- Componentes públicos y privados
- Importación y exportación entre módulos

*Organización*
- Organizaación de la aplicación en módulos

_Primero vamos a instalar bootstrap, para que se vea bonito :D_

Instalamos bootstrap.
- `npm i --save bootstrap`

Tres formas de utilizar la libreria.
1) Instalamos directo en el styles.scss

`@import '~bootstrap/dist/css/boostrap.min.css';`

2) Lo Agregamos al angular.json (RECOMENDADO)
```json
 "styles": [
    "node_modules/bootstrap/dist/css/bootstrap.css",
    "src/styles.scss"
],
```

3) Lo Agregamos al index.html
```html
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossorigin="anonymous">
```
