console.log("Entro ejercicio 5.js");

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


const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com.mx");
const promesa2 = cargarDatos("ok", "http://fuente.wikipedia.com.mx");


Promise.all([promesa1, promesa2])
.then((data)=>{
    console.log("Resolvio las promesas");
})
.catch((error)=>{
    console.error(error);
    console.log("No resolvio las promesas");
});



