let elementoHTML = document.getElementById("html");
let elementoBoton = document.getElementById("boton");


function dark(){
    elementoHTML.classList.add("dark");
    elementoBoton.setAttribute("onclick", "light()");
}

function light(){
    elementoHTML.classList.remove("dark");
    elementoBoton.setAttribute("onclick", "dark()");
}

