/**
 *
 * @param {string} url get de captura de datos
 * @returns
 */

export function getAPI(url) {
  return fetch(url).then((result) => result.json());
}




export function getAPICallback(url, callback, callbackError, objdata) {
  console.log('Peticion.',url,objdata)
  fetch(url)
    .then((result) => result.json())
    .then((datos) => {
        console.log('fetch api',datos.items,callback,objdata)
        callback(datos.items,objdata)})
    .catch((error) => callbackError(error));
}

/**
 *
 * @param {String} url para realización de petición post
 * @param {Object} producto
 * @returns
 */
export function postAPI(url, producto) {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(producto),
  }).then((res) => res.json());
}


//   export function get(path) {
//     return fetch(path, {
//       headers: {
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
//         "Content-Type": "application/json;charset=utf-8",
//       },
//     }).then((result) => result.json());
//   }
