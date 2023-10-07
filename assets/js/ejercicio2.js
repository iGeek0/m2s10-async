console.log("Entro index.js");

let loading = document.getElementById("loading");


function saludar(texto, callback) {
    const textoMayusculas = texto.toUpperCase();
    setTimeout(()=>{
        callback("Hola: " + textoMayusculas);
    }, 4000);
}

function imprimir(parametro) {
    console.log(parametro);
    console.log("Final");
    loading.style.display = "none";
}

saludar("Jesus", imprimir);



