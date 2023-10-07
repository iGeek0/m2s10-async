console.log("Entro ejercicio 3.js");

let loading = document.getElementById("loading");

const miPrimeraPromesa = new Promise((resolve, reject) => {

    setTimeout(() => {
        const exito = false;
        if (exito) {
            resolve("La promesa finalizo correctamente");
        } else {
            reject("La promesa se rechazo o no se cumplio");
        }
    }, 2000);


});

// Manejar promesas .then .catch . finaly

miPrimeraPromesa
    .then((resultado) => {
        console.log("Entro al then");
        console.log(resultado);
    })
    .catch((error) => {
        console.error("Entro a catch");
        console.error(error);
    })
    .finally(()=>{
        console.log("Entro a finaly");
        loading.style.display = "none";
    });

console.log("Este console log es sincrono");
