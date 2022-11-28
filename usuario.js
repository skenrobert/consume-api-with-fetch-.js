const aplicacion = document.querySelector('.container');
const getUrl = new URLSearchParams(window.location.search);
const API_URL ='http://localhost/miggo-accountant-back/public/api/users/';

var id = getUrl.get('id');

fetch(API_URL+id)
.then(response => response.json())
.then(data =>{

    const username =document.createElement('p');
    username.innerHTML = data.data.username;
    const email =document.createElement('p');
    email.innerHTML = data.data.email;
    aplicacion.appendChild(username); 
    aplicacion.appendChild(email); 
 })
.catch(error => console.error(error));

