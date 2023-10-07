console.log("Entro ejercicio 7.js");
// Uso basico o rapido

// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
// );

// Uso recomendado o normal
// Swal.fire({
//     icon: 'error',
//     title: 'Error',
//     text: 'No se pudo cumplir la promesa',
//     footer: 'Creado por Jesus Cardenas'
// });
// iconos: success, warning, error, info


Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
}).then((result) => {
    // resolve({isConfirmed: true});
    if (result.isConfirmed) {
        Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
        )
    } else {
        // resolve({isConfirmed: false});
        Swal.fire(
            'Mensaje',
            'Accion cancelada',
            'error'
        )
    }
})