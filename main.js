// Función para mostrar el saldo actual
function verSaldo(saldo) {
    console.log("Tu saldo actual es: $" + saldo.toFixed(2));
    alert("Tu saldo actual es: $" + saldo.toFixed(2));
}

  // Función para cargar saldo
function cargarSaldo(saldo) {
    let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a cargar:"));
    if (!isNaN(cantidad) && cantidad > 0) {
    saldo += cantidad;
    console.log("¡Felicitaciones! Has ingresado $" + cantidad.toFixed(2) + " a tu billetera.");
    alert("¡Felicitaciones! Has ingresado $" + cantidad.toFixed(2) + " a tu billetera.");
    let verSaldoConfirm = confirm("¿Deseas ver tu saldo actual?");
    if (verSaldoConfirm) {
        verSaldo(saldo);
    } else {
        console.log("Gracias por usar esta billetera virtual.");
        alert("Gracias por usar esta billetera virtual.");
    }
    } else {
    console.log("Por favor, ingrese una cantidad válida.");
    alert("Por favor, ingrese una cantidad válida.");
    }
}

  // Función principal de la billetera virtual
function main() {
    let saldo = 0;
    let opcion = prompt("Bienvenido a tu billetera virtual.\nEscribe 'ver saldo' para ver tu saldo actual o 'cargar saldo' para cargar dinero:");
    console.log("Opción seleccionada: " + opcion);

    switch (opcion.toLowerCase()) {
    case 'ver saldo':
        console.log("Ver saldo seleccionado.");
        verSaldo(saldo);
        break;
    case 'cargar saldo':
        console.log("Cargar saldo seleccionado.");
        cargarSaldo(saldo);
        break;
    default:
        console.log("Opción no válida. Por favor, selecciona 'ver saldo' o 'cargar saldo'.");
        alert("Opción no válida. Por favor, selecciona 'ver saldo' o 'cargar saldo'.");
    }
}

  // Llamar a la función principal 
main();

