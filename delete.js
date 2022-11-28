const aplicacion = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
const API_URL ='http://localhost/miggo-accountant-back/public/api/users/';

var id = getUrl.get('id');

const othePram = {
    headers:{
        "content-type":"application/json; charset=UTF-8"
    },
    body:Data,
    method:"DELETE"
};

fetch(API_URL+id)
.then(response => response.json())
.then(data =>{
    console.log(data.data);
    alert('borrado');
 })
.catch(error => console.error(error));

