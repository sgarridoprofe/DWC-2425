const http = require("http");
//import http from "http";

const arArticulos = [
  { id: 1, nombre: "Articulo 1", precio: 100 },
  { id: 2, nombre: "Articulo 2", precio: 200 },
  { id: 3, nombre: "Articulo 3", precio: 300 },
];

//create server
// request - what the client sends to the server
// response - what the server sends back to the client
const app = http.createServer((request, response) => {
  //response.writeHead(200, { "Content-Type": "text/plain" });
  //response.end("Hello World");

  //dependiendo del tipo de devolución, definimos el Content-Type
  response.writeHead(200, { "Content-Type": "application/json" });
  response.end(JSON.stringify(arArticulos));
});

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
