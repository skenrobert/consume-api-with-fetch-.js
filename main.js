

const API_URL ='http://localhost/miggo-accountant-back/public/api';
const Data={
        name:'',
        id:''
};
//optional parameters
const othePram = {
    headers:{
        "content-type":"application/json; charset=UTF-8"
    },
    body:Data,
    method:"GET"
};


const HTMLResponse = document.querySelector("#contenido");
const ul = document.createDocumentFragment('ul');

      //  fetch(API_URL+'/users',othePram)
        fetch(API_URL+'/users')
       .then(response => response.json())
       .then(data =>{ 
     //  .then(function(data) {

     
            data.data.forEach(usuario => {
                const p =document.createElement('p');
                p.setAttribute('id', usuario.id);
                p.innerHTML =usuario.username;
                p.addEventListener('click', function(){
                    window.location.href = './usuario.html?id='+usuario.id
                })
                HTMLResponse.appendChild(p);
            });




//***********************success */
     /*
         for (let usuario of data.data){
                let elem = document.createElement('li');
                elem.appendChild(
                    document.createTextNode(usuario.username)
                    );
                ul.appendChild(elem); 
        } 

        HTMLResponse.appendChild(ul);
*/
            // document.getElementById('contenido').innerHTML += usuario.username;
})
.catch(error => console.error(error));
