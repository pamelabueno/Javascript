// Inicializar el saldo y el historial de transacciones
let saldo = parseFloat(localStorage.getItem('saldo')) || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];

// Función para mostrar el saldo actual
function verSaldo() {
document.getElementById('saldoContainer').innerText = "Tu saldo actual es: $" + saldo.toFixed(2);
console.log("Tu saldo actual es: $" + saldo.toFixed(2));
}

// Función para cargar saldo
function cargarSaldo() {
let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero a cargar:"));
if (!isNaN(cantidad) && cantidad > 0) {
    saldo += cantidad;
    localStorage.setItem('saldo', saldo);
    historial.push({ tipo: 'carga', cantidad: cantidad, fecha: new Date().toLocaleString() });
    localStorage.setItem('historial', JSON.stringify(historial));
    console.log("¡Felicitaciones! Has ingresado $" + cantidad.toFixed(2) + " a tu billetera.");
    alert("¡Felicitaciones! Has ingresado $" + cantidad.toFixed(2) + " a tu billetera.");
    actualizarHistorial();
    let verSaldoConfirm = confirm("¿Deseas ver tu saldo actual?");
    if (verSaldoConfirm) {
    verSaldo();
    } else {
    console.log("Gracias por usar esta billetera virtual.");
    alert("Gracias por usar esta billetera virtual.");
    }
} else {
    console.log("Por favor, ingrese una cantidad válida.");
    alert("Por favor, ingrese una cantidad válida.");
}
}

// Función para actualizar el historial de transacciones en el DOM
function actualizarHistorial() {
let historialContainer = document.getElementById('historial');
historialContainer.innerHTML = '';
historial.forEach((transaccion, index) => {
    let li = document.createElement('li');
    li.innerText = `${transaccion.tipo} de $${transaccion.cantidad.toFixed(2)} el ${transaccion.fecha}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.onclick = () => eliminarTransaccion(index);
    li.appendChild(deleteBtn);
    historialContainer.appendChild(li);
});
}

// Función para eliminar una transacción del historial
function eliminarTransaccion(index) {
historial.splice(index, 1);
localStorage.setItem('historial', JSON.stringify(historial));
actualizarHistorial();
}

// Inicializar la aplicación
function main() {
document.getElementById('verSaldoBtn').addEventListener('click', verSaldo);
document.getElementById('cargarSaldoBtn').addEventListener('click', cargarSaldo);
actualizarHistorial();
}

// Llamar a la función principal para ejecutar el programa
main();