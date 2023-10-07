console.log("Entro ejercicio 6.js");

// Servidor......
function cargarDatos(status, fuente) {
    return new Promise((resolve, reject) => {
        if (status == "ok") {
            setTimeout(() => {
                resolve(`Datos cargados correctamente desde ${fuente}`);
            }, 2000)
        } else {
            setTimeout(() => {
                reject(`Datos no disponibles en ${fuente}`);
            }, 4000)
        }
    });
}


const promesa1 = cargarDatos("ok", "http://fuente.de.los.deseos.com.mx");
const promesa2 = cargarDatos("ok", "http://fuente.wikipedia.com.mx");






(async () => {
    try {
        const respuesta = await promesa1;
        const respuesta2 = await promesa2;
        console.log(respuesta);
        console.log(respuesta2);
    } catch (error) {
        console.error("Fallo algo en el codigo")
    }
})();



promesa1
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    });

promesa2
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    });
