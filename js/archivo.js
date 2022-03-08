//////////////// PAGES DATOS DE PAX ///////////////////
document.getElementById("formulario").addEventListener("submit", procesar);

class Datos {
    constructor(nombre, apellido, residencia, tipoDocumento, documento,nacimiento, sexo,  mail, telefono){
        this.nombre = nombre;
        this.apellido = apellido;
        this.residencia = residencia;
        this.tipoDocumento = tipoDocumento;
        this.documento = documento;
        this.nacimiento = nacimiento;
        this.sexo = sexo;
        this.mail = mail;
        this.telefono = telefono;
    } 
}

let datos = [];

function procesar(e){
    
    e.preventDefault()

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let residencia = document.getElementById("residencia").value;
    let tipoDocumento = document.getElementById("tipoDocumento").value;
    let documento = document.getElementById("documento").value;    
    let nacimiento = document.getElementById("nacimiento").value;
    const sexo = eleccionSexo();
    let mail = document.getElementById ("mail").value;
    let telefono = document.getElementById("telefono").value;

    const dato = new Datos (nombre, apellido,residencia,tipoDocumento,documento, nacimiento, sexo, mail, telefono);

    datos.push(dato);
    console.log(datos);

     
    Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Datos completos',
    showConfirmButton: false,
    timer: 1500
  })
    dibujarHtml();
}

function dibujarHtml() {   
    
    document.getElementById("mostrarDatos").innerHTML = "";
    
    for (let i = 0 ; i < datos.length ; i ++){
        let nombre = datos[i].nombre;
        let apellido = datos[i].apellido;
        let residencia = datos[i].residencia;
        let tipoDocumento = datos[i].tipoDocumento;
        let documento = datos[i].documento;
        let nacimiento = datos[i].nacimiento;
        let sexo = datos[i].sexo;
        let mail = datos[i].mail;
        let telefono = datos[i].telefono;

        document.getElementById("mostrarDatos").innerHTML += `
        <div class="card text-center" style="width: 50rem;">
            <div class="card-body">
                <h4 class="card-title">Los datos confirmados son: </h4>
                <p class="card-text"> NOMRE: ${nombre}</p>
                <p class="card-text"> APELLIDO: ${apellido}</p>
                <p class="card-text">PAIS DE RESIDENCIA: ${residencia}</p>
                <p class="card-text">TIPO DE DOCUMENTO: ${tipoDocumento} 
                <p class="card-text">NUMERO: ${documento}</p>
                <p class="card-text">FECHA DE NACIMIENTO: ${nacimiento}</p>
                <p class="card-text">SEXO: ${sexo}</p>
                <p class="card-text">MAIL: ${mail}</p>
                <p class="card-text">TELEFONO: ${telefono}</p>
                <a href="checkoutdepago.html" id="confirmation" class="btn btn-primary">Confirmo los datos </a>
                <a href="./datosdepax.html" id="error" class="btn btn-primary">Hay un error!</a>
            </div>
        </div>
        `

        let btnConfirmar = document.getElementById("error")
        btnConfirmar.addEventListener("click", error);

    }
}

let eleccionSexo = () => document.querySelector('input[name="sexo"]:checked').value;
