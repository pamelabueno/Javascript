let saldo = parseFloat(localStorage.getItem('saldo')) || 0;
let historial = JSON.parse(localStorage.getItem('historial')) || [];

const monedaSelect = document.getElementById('monedaSelect');

function obtenerSimboloMoneda(moneda) {
switch (moneda) {
    case 'USD': return '$';
    case 'EUR': return '€';
    case 'ARS': return 'AR$';
    default: return '$';
}
}

function verSaldo() {
const moneda = monedaSelect.value;
const simbolo = obtenerSimboloMoneda(moneda);
document.getElementById('saldoContainer').innerText = `Tu saldo actual es: ${simbolo}${saldo.toFixed(2)}`;
console.log(`Tu saldo actual es: ${simbolo}${saldo.toFixed(2)}`);
}

function cargarSaldo() {
const moneda = monedaSelect.value;
let cantidadInput = document.getElementById('cantidadInput');
let cantidad = parseFloat(cantidadInput.value);

if (!isNaN(cantidad) && cantidad > 0) {
    saldo += cantidad;
    localStorage.setItem('saldo', saldo);
    historial.push({ tipo: 'carga', cantidad: cantidad, moneda: moneda, fecha: new Date().toLocaleString() });
    localStorage.setItem('historial', JSON.stringify(historial));
    const simbolo = obtenerSimboloMoneda(moneda);
    console.log(`¡Felicitaciones! Has ingresado ${simbolo}${cantidad.toFixed(2)} a tu billetera.`);
    alert(`¡Felicitaciones! Has ingresado ${simbolo}${cantidad.toFixed(2)} a tu billetera.`);
    cantidadInput.value = '';  // Limpiar el input después de cargar saldo
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

function actualizarHistorial() {
let historialContainer = document.getElementById('historial');
historialContainer.innerHTML = '';
historial.forEach((transaccion, index) => {
    let li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    const simbolo = obtenerSimboloMoneda(transaccion.moneda);
    li.innerText = `${transaccion.tipo} de ${simbolo}${transaccion.cantidad.toFixed(2)} el ${transaccion.fecha}`;
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.innerText = 'Eliminar';
    deleteBtn.onclick = () => eliminarTransaccion(index);
    li.appendChild(deleteBtn);
    historialContainer.appendChild(li);
});
}

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
