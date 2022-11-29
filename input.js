//<script src="input.js" type="module"></script>


//const capa = document.querySelector(".input");//id


//const linea = document.createElement('p');
//const input = document.createElement('input');

//linea.innerHTML = '<input value="com_xxx" name="option" />';

//capa.appendChild(linea); 


//capa = document.getElementById('input');
//capa.innerHTML= '<input type="hidden" value="com_xxx" name="option" /><input type="hidden" value="introduce" name="task" />';


document.addEventListener('DOMContentLoaded', function() {
    var textInput = document.createElement('input');
    textInput.type = 'input';
   // textInput.id = 'submit';
    textInput.value = 'kenny';
    textInput.className = 'btn';
 
    textInput.onclick = function() {
    // …
    };
 
    var container = document.getElementById('input');
    container.appendChild(textInput);
}, false);