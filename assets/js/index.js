console.log("Entro index.js");


function saludar(texto, callback) {
    const textoMayusculas = texto.toUpperCase();
    // .... pasan 1000 cosas mas...
    callback("Hola: " + textoMayusculas);
}

function imprimir(parametro) {
    console.log(parametro);
}

saludar("Jesus", imprimir);

// imprimir("Imprimir 1");
// imprimir("Imprimir 2");
// imprimir("Imprimir 3");
