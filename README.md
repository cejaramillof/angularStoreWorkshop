# AngularStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4. (npx ng new angular-store)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


##LIFT
#### LOCATE
Folder per component, over functionality
#### IDENTIFY
Lastname to files, .component.ts, .module.ts
#### FLAT
flat folder structure
#### TRY DRY
try dont repeat yourself

## Smart and DumbComponents
Components = render, visual and interactive
inputs and outputs to transfer data
Containers = fetch


# NGINX
```docker pull nginx:alpine```

```docker run -d -p 8080:80 -v ${pwd}/dist/angular-store/:/usr/share/nginx/html nginx:alpine```

```docker ps / docker stop```

```docker build . -t angular-store:latest```

```docker run -d -p 80:80 angular-store:latest```

## Compilación
### Just in Time (JIT)
### Ahead of Time (AOT) - Código precompilado
 
#### JS Fast need (Download, Parse, Compile, Execute)


### Implementar webpack bundle analyzer
```npm i webpack-bundle-analyzer --save-dev```

Generar archivo de estadisticas
```ng build --prod --stats-json```

correr el bundle-analyzer
```npx webpack-bundle-analyzer dist/angular-store/stats-es2015.json```


### Bundle Size
peso en bites aplicación

### Tree Shakeable
Empaquetador detecta  código que no se esté utilizando y lo elimina


### https://bundlephobia.com/
