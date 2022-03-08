/////////// EVENTOS //////////////

let btnCotizar = document.getElementById("cotizar");
btnCotizar.addEventListener("click",cotizarVuelo);

let roundTrip = document.getElementById("idaYVuelta");
roundTrip.addEventListener("click", mostrarFechaRegreso);

let oneWay = document.getElementById("ida");
oneWay.addEventListener("click", mostrarFechaRegreso);

let btnHistorial = document.getElementById("historialCompra");
btnHistorial.addEventListener("click", utilizarDatos);


/**
 * @typedef {Object} Destino
 * @property {Number} id El id del del destino
 * @property {String} nombre El nombre del destino
 * @property {String} codigoDestino Es el codigo que se utiliza para codificar el destino para la compañia aerea
 * @property {Number} precioUnitario El precio Unitario es lo que cuesta el pasaje por persona
 * @property {Number} precioMenor El precio que cuesta para pasajeros menores (de 3 a 11 años)
 * @property {Number} precioInfante El precio que cuesta para pasajeros infantes ( de 0 a 2 años)
 */

/**
 * @class {Destino}
 */
class Destino {
    constructor( id,nombre, codigoDestino, precioUnitario){
        this.id = id;
        this.nombre = nombre;
        this.codigoDestino = codigoDestino;
        this.precioUnitario = precioUnitario;
        this.precioMenor = precioUnitario*0.25;
        this.precioInfante = precioUnitario*0.1;

    }
    cotizar(tramoElegido, cantidadAdultos, cantidadNinos, cantidadInfantes){
        return tramoElegido.multiplicador*((this.precioUnitario*cantidadAdultos + ((cantidadNinos*this.precioMenor) + (cantidadInfantes*this.precioInfante))));
    }
}

////operador ternario ///////
class TramoElegido{
    constructor (tramo) {
        this.tramoElegido = tramo
        tramo=="ida" ? this.multiplicador = 1 : this.multiplicador = 1.15
    }
}

//Esta funcion busca el destino en la base de datos
function getDestino(nombreDestino){    
    let destino = todosLosDestinos.find(d => d.nombre.toLowerCase()===nombreDestino.toLowerCase());
    return destino;
}

let eleccionDeTramo = () => document.querySelector('input[name="tramo"]:checked').value;

let todosLosDestinos = []

/**
 * @function fetchDestinos busca todos los destinos disponibles del archivo y modifica la variable todosLosDestinos
 * con los objetos Destino creados a partir de la lectura del json.
 * 
 * La variable todosLosDestinos es usada al momento de cotizar un vuelo.
 */
function fetchDestinos() {
    const url = "../js/destino.json";
    fetch(url)
        .then(response => response.json())
        .then(destinosJson => destinosJson.forEach( d => {
            let objetoDestino = new Destino(d.id,d.nombre,d.codigoDestino,d.precio)
            todosLosDestinos.push(objetoDestino);
        }))
        .catch(error => console.error("ha ocurrido un error inesperado: " + error));
    
    }

//ejecuto la funcion que carga todos los destinos 
fetchDestinos();

//destructuracion
const [destino1, destino2, destino3, destino4, destino5, destino6, destino7, destino8, destino9, destino10, destino11, destino12, destino13] = todosLosDestinos

/**
 * @function mostrarFechaRegreso hace que en caso de que el pasajero elija solo ida , 
 * no se muestre en las opciones  el regreso.
 */
function mostrarFechaRegreso() {
    let tramo = eleccionDeTramo();
    if (tramo != "ida") {
        document.getElementById("divFechaRegreso").style.display = "block";
        document.getElementById("divFechaRegreso1").style.display = "block";
    } else {
        document.getElementById("divFechaRegreso").style.display = "none";
        document.getElementById("divFechaRegreso1").style.display = "none";
    }
}

let eleccionOrigen = () => document.getElementById("seleccionOrigen").value; 

let origenSeleccion = document.getElementById("seleccionOrigen");
origenSeleccion.addEventListener("change",eleccionOrigen);

let eleccionDestino = () => document.getElementById("seleccionDestino").value;

let destinoEleccion = document.getElementById("seleccionDestino");
destinoEleccion.addEventListener("change",eleccionDestino);

let eleccionFecha = (idCampo) => document.querySelector('input[name="'+ idCampo +'"]').value;

let cantAdultos = () => document.getElementById("adultos").value;

let adt = document.getElementById("adultos");
adt.addEventListener("change",cantAdultos);

let cantNino = () => document.getElementById("nino").value;

let child = document.getElementById("nino");
child.addEventListener("change",cantNino);

let cantBb = () => document.getElementById("bebe").value;

let baby = document.getElementById("bebe");
baby.addEventListener("change",cantBb);

class Cotizacion{
    constructor(tramo,fechaIda,fechaRegreso,origen,destinoElegido,adulto,nene,infante){
        this.tramo = tramo;
        this.fechaIda = fechaIda;
        this.fechaRegreso = fechaRegreso;
        this.origen = origen;
        this.destinoElegido = destinoElegido;
        this.adulto = adulto;
        this.nene = nene;
        this.infante = infante;
    }
}


// por simplicidad el precio Unitario va a salir lo mismo desde cualquier destino
/**
 * @function cotizarVuelo es la funcion para que luego de elegidos todos 
 * los campos arroje el total.
 */
function cotizarVuelo() {
    let tramo = eleccionDeTramo();
    let fechaIda = eleccionFecha('fechaIda');
    let fechaRegreso = eleccionFecha('fechaRegreso');
    let origen = eleccionOrigen();
    let destino = eleccionDestino();
    let adulto = cantAdultos();
    let nene = cantNino();
    let infante = cantBb();

    let destinoElegido = getDestino(destino);

    let precioFinal = destinoElegido.cotizar(new TramoElegido(tramo),adulto,nene,infante)
    let mensajeFinal = "El precio final es " + precioFinal.toFixed(2);
    document.getElementById("resultadoFechaIda").innerHTML =  fechaIda;
    document.getElementById("ciudadOrigen").innerHTML = origen;
    document.getElementById("ciudadDestino").innerHTML = destino;
    document.getElementById("precioFinal").innerHTML = precioFinal.toFixed(2);
    document.getElementById("resultadoFechaIda1").innerHTML = fechaIda;
    document.getElementById("precioFinal1").innerHTML = precioFinal.toFixed(2);
    document.getElementById("ciudadOrigen2").innerHTML = origen;
    document.getElementById("ciudadDestino2").innerHTML = destino;
    
    document.getElementById("opcionesDeVuelo").style.display = "block";

    // condicional que actua solo en caso de que usuario eliga ida y vuelta 
    if(tramo=="ida y vuelta"){
        document.getElementById("regresoFecha").style.display = "block";
        document.getElementById("regresoFecha1").style.display = "block";
        document.getElementById("resultadoFechaRegreso").innerHTML = fechaRegreso;
        document.getElementById("resultadoFechaRegreso1").innerHTML = fechaRegreso;
        document.getElementById("ciudadOrigenRegreso").innerHTML = origen;
        document.getElementById("ciudadDestinoRegreso").innerHTML = destino;
        document.getElementById("regresoCiudadOrigen").innerHTML = origen;
        document.getElementById("regresoCiudadDestino").innerHTML = destino;
    } else {
        document.getElementById("regresoFecha").style.display = "none";
        document.getElementById("regresoFecha1").style.display = "none";
    }

    //aparece en el local storage lo que elige el usuario
    const cotizacion = new Cotizacion(tramo,fechaIda,fechaRegreso,origen,destinoElegido,adulto,nene,infante)
    localStorage.setItem("cotizacionActual", JSON.stringify(cotizacion));
    localStorage.setItem("precioFinal",precioFinal);
}

function mostrarHistorialCompra (){
    let cotizacion = localStorage.getItem("cotizacionActual")
    cotizacion != null && (document.getElementById("historialCompra").style.display = "block");
}

mostrarHistorialCompra();

// funcion para que guarde muestre en pantalla la ultima busqueda que hizo el usuario y no finalizo compra 
function utilizarDatos (){
    let datosCompra = localStorage.getItem("cotizacionActual")
    if(datosCompra != null){
        let historiaCompra = JSON.parse(datosCompra);
        if (historiaCompra.tramo == "ida") {
            document.getElementById("ida").checked = true; 
            document.getElementById("divFechaRegreso").style.display = "none";
            document.getElementById("divFechaRegreso1").style.display = "none";
        } else {
            document.getElementById("idaYVuelta").checked = true; 
            document.getElementById("fechaRegreso").value = historiaCompra.fechaRegreso;
        }

        document.getElementById("seleccionOrigen").value = historiaCompra.origen;
        document.getElementById("seleccionDestino").value = historiaCompra.destinoElegido.nombre;
        document.getElementById("fechaIda").value = historiaCompra.fechaIda;
        document.getElementById("adultos").value = historiaCompra.adulto;
        document.getElementById("nino").value = historiaCompra.nene;
        document.getElementById("bebe").value = historiaCompra.infante;
    }
}


