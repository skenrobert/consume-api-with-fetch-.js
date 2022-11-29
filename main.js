

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


const HTMLResponse = document.querySelector("#contenido");//id
const ul = document.createDocumentFragment('ul');

const body = document.querySelector("#table");
const tabla   = document.createElement("table");
const tblBody = document.createElement("tbody");

      //  fetch(API_URL+'/users',othePram)
        fetch(API_URL+'/users')
       .then(response => response.json())
       .then(data =>{ 
     //  .then(function(data) {

        data.data.forEach(usuario => {

          var hilera = document.createElement("tr");

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode("id "+ usuario.id);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuario.username);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            var celda = document.createElement("td");
            var textoCelda = document.createTextNode(usuario.email);
            celda.appendChild(textoCelda);
            hilera.appendChild(celda);

            var celda = document.createElement("td");
            var button = document.createElement('button'); 
            button.type = 'button'; 
            button.innerText = 'Editar'; 
            button.addEventListener('click', function(){
                window.location.href = './editar.html?id='+usuario.id
            })
            celda.appendChild(button);
            hilera.appendChild(celda);

            var celda = document.createElement("td");
            var button = document.createElement('button'); 
            button.type = 'button'; 
            button.innerText = 'Eliminar'; 
            button.addEventListener('click', function(){
                //window.location.href = 'API_URL'+id;
               fetch(API_URL+'/users/'+usuario.id, {
                     method: 'DELETE',
                        })
              .then(res => res.json())
              .then(res=> {
                console.log(res);
                window.location.href = 'http://localhost/testfrontend/';
        
               });
            })
            celda.appendChild(button);
            hilera.appendChild(celda);

      tblBody.appendChild(hilera);

        
        });

        tabla.appendChild(tblBody);

        body.appendChild(tabla);
        tabla.setAttribute("border", "2");







     //***********************success */

     /*
            data.data.forEach(usuario => {
                const p =document.createElement('p');
                p.setAttribute('id', usuario.id);
                p.innerHTML =usuario.username;
                p.addEventListener('click', function(){
                    window.location.href = './usuario.html?id='+usuario.id
                })
                HTMLResponse.appendChild(p);
            });

*/


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
