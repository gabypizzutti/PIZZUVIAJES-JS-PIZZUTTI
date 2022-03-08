///////////////// PAGE AUTO ///////////////
let btnCotizarAuto = document.getElementById("btnAuto");
btnCotizarAuto.addEventListener("click", cotizarAuto);

class Auto{
    constructor(lugarRetiro,fechaRetiro, fechaDevolucion, horaRetiro, horaDevolucion){
        this.lugarRetiro = lugarRetiro;
        this.fechaRetiro = fechaRetiro;
        this.fechaDevolucion = fechaDevolucion;
        this.horaRetiro = horaRetiro;
        this.horaDevolucion = horaDevolucion;
    }
}


let elegirLugarRetiro = () => document.getElementById("lugarRetiro").value;

let retiro = document.getElementById("lugarRetiro");
retiro.addEventListener("change", elegirLugarRetiro);

let eleccionFechaRetiro = () => document.getElementById("fechaRetiro").value;

let fechaR = document.getElementById("fechaRetiro");
fechaR.addEventListener("change", eleccionFechaRetiro);

let horaRetiro = () => document.getElementById("horaRetiro").value;

let hora = document.getElementById("horaRetiro");
hora.addEventListener("change", horaRetiro);

let eleccionFechaDevolucion = () =>document.getElementById("fechaDevolucion").value;

let fechaDevo = document.getElementById("fechaDevolucion");
fechaDevo.addEventListener("change", eleccionFechaDevolucion);

let horaDevolucion = () => document.getElementById("horaDevolucion").value

let horaDevo = document.getElementById("horaDevolucion");
horaDevo.addEventListener("change",horaDevolucion);

function cotizarAuto(){
    document.getElementById("opcionesAuto").style.display = "block";
}