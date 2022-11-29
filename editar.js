const aplicacion = document.querySelector('.container');//class
const HTMLResponse = document.querySelector("#input");//id

const getUrl = new URLSearchParams(window.location.search);
const API_URL ='http://localhost/miggo-accountant-back/public/api/users/';

var indice = getUrl.get('id');

fetch(API_URL+indice)
.then(response => response.json())
.then(data =>{

    const codigo = document.createElement('p');
    codigo.innerHTML = 'indice: '+data.data.id;
    aplicacion.appendChild(codigo);


    const username =document.createElement('p');
   // username.innerHTML = data.data.username;
    var textInput = document.createElement('input');
    textInput.type = 'input';
    textInput.name = 'username';
    textInput.value = data.data.username;
    username.appendChild(textInput); 
    aplicacion.appendChild(username); 

    
    const email =document.createElement('p');
    var textInput1 = document.createElement('input');
    textInput1.type = 'input';
    textInput1.name = 'email';
    textInput1.value = data.data.email;
    email.appendChild(textInput1); 
    aplicacion.appendChild(email); 

   const button = document.createElement('button'); 
   button.type = 'button'; 
   button.innerText = 'Actualizar'; 
  

   button.addEventListener('click', function(){

            fetch(API_URL+indice, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id:indice, username:textInput.value, email:textInput1.value })
        })
        .then(res => res.json())
        .then(res=> {
            window.location.href = 'http://localhost/testfrontend/';
          //  alert(API_URL+indice);
            console.log(res);

        });
    })

   aplicacion.appendChild(button);

 })
.catch(error => console.error(error));

