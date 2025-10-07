/**
 * Recibe un array y muestra su contenido
 *
 * @param {*} pvalores : array de entrada
 */

function showValores2(pvalores) {
  document.write("Mostrando valores del array ..</br>");
  pvalores.forEach((elemento, i) => {
    document.write(`Valor del array ${i} : ${elemento} </br>`);
  });
}
