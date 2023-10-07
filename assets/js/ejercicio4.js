console.log("Entro ejercicio 4.js");

// Servidor......
function cargarDatos(status, fuente) {
    return new Promise((resolve, reject)=>{
        if (status == "ok") {
            resolve(`Datos cargados correctamente desde ${fuente}`);
        } else {
            reject(`Datos no disponibles en ${fuente}`);
        }
    });
}


// Cliente......
cargarDatos("ok", "http://fuente.de.los.deseos.com.mx")
.then((data)=>{
    console.log(data);
    console.log("Resolvio promesa 1");
})
.catch((error)=>{
    console.error("Fallo promesa 1");
});



cargarDatos("error", "http://fuente.wikipedia.com.mx")
.then((data)=>{
    console.log("Resolvio promesa 2");
})
.catch((error)=>{
    console.error(error);
    console.error("No fue posible realizar la accion");
});




/*
mandar a llamar la promesa 2 ocaciones
1. Con promesa resuelta
2. Con promesa fallida
3. Usar la fuente de datos http://fuente.de.los.deseos.com
*/
