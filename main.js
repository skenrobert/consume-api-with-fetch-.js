

const API_URL ='http://localhost/miggo-accountant-back/public/api';
// var array_valor = [];
//let valor = new Array();

const HTMLResponse = document.querySelector("#contenido");
const ul = document.createDocumentFragment('ul');

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
});