

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
         for (let usuario of data.data){
                let elem = document.createElement('li');
                elem.appendChild(
                    document.createTextNode(usuario.username)
                    );
                ul.appendChild(elem); 
//                console.log(ul);
        } 

        HTMLResponse.appendChild(ul);

     /*
         for (let usuario of data.data){
             document.getElementById('contenido').innerHTML += usuario.username;
//              array_valor.push(trm);
           }*/
})
.catch(error => console.error(error));
