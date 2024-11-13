# Sosaquihoy

https://maps.googleapis.com/maps/api/geocode/json?latlng={position.coords.latitude},{position.coords.longitude}&key={GOOGLE_API_KEY}
formatted_address
address_components.long_name

limpie el inpu al clicar flecha izquirda
sacar localizaciones en Reparto

borrar un añadido a una ubicacion a las 24h
// Suponiendo que guardas los datos en memoria
let datos = [];

function agregarDato(dato) {
const fechaCreacion = new Date();
const nuevoDato = { ...dato, fechaCreacion };
datos.push(nuevoDato);

// Establecer un temporizador para eliminar el dato después de 24 horas
setTimeout(() => {
eliminarDato(nuevoDato);
}, 24 _ 60 _ 60 \* 1000); // 24 horas en milisegundos
}

function eliminarDato(dato) {
datos = datos.filter(d => d !== dato);
console.log('Dato eliminado:', dato);
}

// Agregar un dato
agregarDato({ id: 1, nombre: 'Ejemplo' });
