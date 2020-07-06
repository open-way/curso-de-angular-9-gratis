**Base con Angular**

Instalamos bootstrap.
- `npm i --save bootstrap`

Dos formas de utilizar la libreria.
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
