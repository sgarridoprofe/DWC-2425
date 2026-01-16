# Node

Node.js es un entorno de ejecución nos permite ejecutar JS fuera del navegador. Permitiendo el desarrollo de aplicaciones JS del lado del servidor.

[NodeJS](https://nodejs.org/en)

## npm

NPM (Node Package Manager) es el gestor de paquetes predeterminado para Node.js

## Creación de proyecto

En el directorio especifico creamos el fichero .init mediante el comando:

### `npm init`

En el archivo package.json generado, realizamos un pequeño cambio y añadimos un nuevo comando de script

"scripts": {
"start": "node index.js",

y añadimos el archivo index.js, podemos lanzar el script con npm start

## `Ejemplo código para ejecución de servidor web`

```
const http = require('http')

const app = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' })
  response.end('Hello World')
})

const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)
```

## `Node Express`

Aunque podemos crear un servidor web directamente con node, vamos a utilizar express para la gestión de rutas, existen alternativas más modernas a express, como fastify

Instalamos express, con lo que se incluirá la dependencia en el package.json

### `npm install express`

Nos permite la definición de las distintas rutas:

```
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/articulos", (request, response) => {
  response.json(arArticulos);
});
```

## `nodemon`

Para evitar tener que terminar y volver a ejecutar el servidor ante cualquier cambio, usaremos nodemon, lo instalaremos como una dependencia de desarrollo

### `npm install --save-dev nodemon`

De forma que contaremos con las siguientes dependencias:

```
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
```
Y modificamos los scripts para utilizar nodemon

```
 "start-express": "nodemon indexExpress.js",
```

## `API REST`
Mejoraremos nuestra aplicación para ofrecer toda la funcionalidad asociada al api rest




Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Con CTRL+C cerramos el servidor, si queremos volver a ejecutar el servidor

### `npm run dev`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
