# BASE CON ANGULAR

Bienvenidos a la sesión 02 del *Curso de Angular 09 GRATIS*.

### Temas

**Módulos**
- Anatomía de un módulo
- Generación de módulos

**Componentes**

- Anatomía de un componente
- Generación de componentes

**Visibilidad entre componentes**
- Componentes públicos y privados
- Importación y exportación entre módulos

**Organización**
- Organizaación de la aplicación en módulos


Primero vamos a instalar **bootstrap**, para que se vea bonito :D.

Instalamos bootstrap con el siguiente comando.
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


**Módulos**

Los módulos son la base fundamenta del Angular, angular es un framework modularizado, por lo tanto es importante conocer su anatomía.

***Anatomía de un módulo***
```ts
 
@NgModule({
  imports: [
    ...ANGULAR_MODULES,
  ],
  exports: [
    ...COMPONENTS,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
  ],
})
export class SharedModule { }
```

***Generación de módulos***
- Forma general `ng generate module mi-modulo`
- Forma resumida `ng g m mi-modulo`

Podemos usar el `-h` para que ver que opciones mas tenemos.


**Componentes**

Si lo módulos con como las ramaz de un arbol los componentes son las hojas.

***Anatomía de un componente***
```ts
@Component({
  selector: 'open-input-icon',
  styleUrls: ['./input-icon.component.scss'],
  templateUrl: './input-icon.component.html',
})
export class InputIconComponent implements AfterViewInit {
  @Input() public fieldSize = 'medium';
  @Input() public icon = '';

  constructor(
  ) {
  }

  ngAfterViewInit() {
  }
  
  public myMetodo() {
  
  }
  
}
```

***Generación de componentes***
- Forma general `ng generate component mi-componente`
- Forma resumida `ng g c mi-componente`

Podemos usar el `-h` para que ver que opciones mas tenemos.

**Visibilidad entre componentes**

Revisaremos algo interesante.

***Componentes públicos y privados***

Privados, estos generalmente solo estan declarados en el array:
```ts
  ...
  declarations: [
    ...COMPONENTS_PRIVADOS,
  ]
  ...
```

Públicos, Estos generalmente estan declarados en el array `declarations` y `exports`:
```ts
  ...
  declarations: [
    ...COMPONENTS_PUBLICOS,
  ],
  exports: [
    ...COMPONENTS_PUBLICOS,
  ]
  ...
```



