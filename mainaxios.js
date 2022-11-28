const API_URL ='http://localhost/miggo-accountant-back/public/api';


axios.get(API_URL+'/users')
  .then(function (response) {
    // función que se ejecutará al recibir una respuesta
    console.log(response);
  })
  .catch(function (error) {
    // función para capturar el error
    console.log(error);
  })
  .then(function () {
    // función que siempre se ejecuta
  });