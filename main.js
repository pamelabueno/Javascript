// Función para mostrar el saldo actual
function verSaldo(saldo) {
    alert("Tu saldo actual es: $" + saldo.toFixed(2));
}

  // Función para cargar saldo
function cargarSaldo(saldo) {
    let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a cargar:"));
    if (!isNaN(cantidad) && cantidad > 0) {
    saldo += cantidad;
    alert("¡Felicitaciones! Has ingresado $" + cantidad.toFixed(2) + " a tu billetera.");
    let verSaldoConfirm = confirm("¿Deseas ver tu saldo actual?");
    if (verSaldoConfirm) {
        verSaldo(saldo);
    } else {
        alert("Gracias por usar esta billetera virtual.");
    }
    } else {
    alert("Por favor, ingrese una cantidad válida.");
    }
}

  // Función principal de la billetera
function main() {
    let saldo = 0;
    let opcion = prompt("Bienvenido a tu billetera virtual.\nEscribe 'ver saldo' para ver tu saldo actual o 'cargar saldo' para cargar dinero:");

    switch (opcion.toLowerCase()) {
    case 'ver saldo':
        verSaldo(saldo);
        break;
    case 'cargar saldo':
        cargarSaldo(saldo);
        break;
    default:
        alert("Opción no válida. Por favor, selecciona 'ver saldo' o 'cargar saldo'.");
    }
}

  // Llamar a la funcion principal
main();
