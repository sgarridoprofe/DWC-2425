export function get(url) {
  return fetch(url).then((result) => result.json());
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
