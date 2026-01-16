const express = require("express");
const app = express();

const arArticulos = [
  { id: 1, nombre: "Articulo 1", precio: 100 },
  { id: 2, nombre: "Articulo 2", precio: 200 },
  { id: 3, nombre: "Articulo 3", precio: 300 },
];

//middleware para parsear JSON
//usaremos el json parser de express
app.use(express.json());

//definimos las rutas
app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/api/articulos", (request, response) => {
  response.json(arArticulos);
});

// obtener un artículo por su id
app.get("/api/articulos/:id", (request, response) => {
  const id = Number(request.params.id);
  const art = arArticulos.find((articulo) => articulo.id === id);

  if (art) {
    response.json(art);
  } else {
    response.status(404).end();
  }
});

//borrar un artículo por su id
app.delete("/api/articulos/:id", (request, response) => {
  const id = Number(request.params.id);
  arArticulos = arArticulos.filter((articulo) => articulo.id !== id);

  response.status(204).end();
});

//crear un nuevo artículo
//gracias al middleware express.json() podemos acceder a request.body
app.post("/api/articulos", (request, response) => {
  const articulo = request.body;
  console.log(articulo);
  response.json(articulo);
  arArticulos.push(articulo);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
