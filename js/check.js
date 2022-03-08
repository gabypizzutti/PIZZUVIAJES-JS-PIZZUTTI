///////////////////// PAGES CHECKOUT DE PAGO ///////////////////

document.getElementById("formularioPagos").addEventListener("submit", procesarPago);

class Pagos{
    constructor(cardNumber,nameOnCard,genero,expiry,cvc,numberDocument,cuotas){
        this.cardNumber = cardNumber;
        this.nameOnCard = nameOnCard;
        this.genero = genero;
        this.expiry = expiry;
        this.cvc = cvc;
        this.numberDocument = numberDocument;
        this.cuotas = cuotas;
    }
}

let datosDePago= []

function procesarPago(e){
    
    e.preventDefault()

    let cardNumber = document.getElementById("cardNumber").value;
    let nameOnCard = document.getElementById("nameOnCard").value;
    const genero = seleccionSexo();
    let expiry = document.getElementById("expiry").value;
    let cvc = document.getElementById("cvc").value;
    let numberDocument = document.getElementById("numberDocument").value;
    let cuotas = document.getElementById("cuotas").value;

    const pago = new Pagos (cardNumber,nameOnCard,genero,expiry,cvc,numberDocument,cuotas);

    datosDePago.push(pago);

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Datos completos',
        showConfirmButton: false,
        timer: 1500
    })

    mostrarDatosPago();
}

function mostrarDatosPago(){

    document.getElementById("mostrarPago").innerHTML = "";

    for (let x = 0 ; x < datosDePago.length ; x++){

        let cardNumber = cardHide();
        let nameOnCard = datosDePago[x].nameOnCard;
        let genero = datosDePago[x].genero;
        let expiry = datosDePago[x].expiry;
        let cvc = datosDePago[x].cvc;
        let numberDocument = datosDePago[x].numberDocument;
        let cuotas = datosDePago[x].cuotas;

        document.getElementById("mostrarPago").innerHTML +=`
        <div class="card text-center" style="width: 50rem;">
            <div class="card-body">
                <h4 class="card-title">Los datos confirmados son: </h4>
                <p class="card-text"> NUMERO DE LA TARJETA: ${cardNumber}</p>
                <p class="card-text"> NOMBRE DE LA TARJETA: ${nameOnCard}</p>
                <p class="card-text">SEXO: ${genero}</p>
                <p class="card-text">FECHA DE EXPIRACION DE LA TARJETA: ${expiry} 
                <p class="card-text">CODIGO DE SEGURIDAD: **** </p>
                <p class="card-text">NUMERO DE DOCUMENTO: ${numberDocument}</p>
                <p class="card-text">CUOTAS: ${cuotas}</p>
                <a href="graciasporsucompra.html" id="confirmacionPago" class="btn btn-primary">Confirmar pago </a>
            </div>
        </div>
        `
        // una vez que pasajero finaliza compra, borre el storage
        let btnPago = document.getElementById("confirmacionPago")
        btnPago.addEventListener("click", confirmacionPago) 
        localStorage.clear();
    }
}


let seleccionSexo = () => document.querySelector('input[name="genero"]:checked').value;

// funcion para ocultar los numeros de la tc y solo mostrar los ultimos 4
function cardHide() {
    let card = document.getElementById("cardNumber").value;

    let hideNum = [];
      for(let c = 0; c < card.length; c++){
      if(c < card.length-4){
        hideNum.push("*");
      }else{
        hideNum.push(card[c]);
      }
    }
    return hideNum.join("");
}  


let cuotasNro = document.getElementById("cuotas");
cuotasNro.addEventListener("change", elegirCuotas);

function elegirCuotas(){
   
    let nroCuotas = document.getElementById("cuotas").value;
    let precioFinal = localStorage.getItem("precioFinal");
    let interes = null;
    switch(nroCuotas) {
        case "1" : 
            interes = 1;
            break;
        case "3":
            interes = 1.2;
            break;
        case "6":
            interes = 1.3;
            break;
        case "9":
            interes = 1.4;
            break;
        default:
            interes = 1.5;
    }
    let precioEnCuotas = (precioFinal*interes/nroCuotas).toFixed(2);
    let mensaje = "Tu viaje en "+nroCuotas+" cuotas es de $ "+ precioEnCuotas+" por cuota, un total de ARS $ "+((precioFinal*interes).toFixed(2));
   
    document.getElementById("pagoTotal").innerText = mensaje;
    document.getElementById("pagoTotal").style.display = "block";
}

