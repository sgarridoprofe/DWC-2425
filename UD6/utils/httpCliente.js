/**
 *
 * @param {string} url get de captura de datos
 * @returns
 */



export function getAPI(url) {
  return fetch(url).then((result) => result.json());
}

export function getAPICallback(url, callback, callbackError) {
   fetch(url)
    .then((result) => result.json())
    .then((datos) => callback(datos))
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

// export function get(path) {
//     return fetch(path, {
//       headers: {
//         Authorization:
//           "Bearer JIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs",
//         "Content-Type": "application/json;charset=utf-8",
//       },
//     }).then((result) => result.json());
//   }

function ejemplo() {
  fetch("https://api.github.com/users/manishmshiva", {
    method: "GET",
    headers: { "Content-type": "application/json;charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}

function ejemploPost() {
  // datos mandados con la solicutud POST
  let _datos = {
    titulo: "foo",
    principal: "bar",
    Id: 1,
  };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(_datos),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err));
}
