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
    const eliminar = document.createElement('p');
    eliminar.innerHTML = data.data.id;
    aplicacion.appendChild(username); 
    aplicacion.appendChild(email);
    eliminar.addEventListener('click', function(){
       // window.location.href = './usuario.html?id='+usuario.id
       console.log('borrar');
       //a href :TODO crear la url y agregarla al href de la etiqueta a
    })
    aplicacion.appendChild(eliminar);



 })
.catch(error => console.error(error));

