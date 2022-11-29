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
   
   const button = document.createElement('button'); 
   button.type = 'button'; 
   button.innerText = 'Haz Click'; 
  

   button.addEventListener('click', function(){
        //window.location.href = 'API_URL'+id;
       alert(DELETE);

       fetch(API_URL+id, {
             method: 'DELETE',
                })
      .then(res => res.json())
      .then(res=> {
        console.log(res);
        window.location.href = 'http://localhost/testfrontend/';

       });
    })

   aplicacion.appendChild(username); 
   aplicacion.appendChild(email);
   aplicacion.appendChild(eliminar);
   aplicacion.appendChild(button);

 })
.catch(error => console.error(error));

