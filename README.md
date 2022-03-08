# OptimizandoPF-PIZZUTTI

## PAGINAS
* Index
* Page Vuelo y proceso de compra (pages datosdepax, checkoutdepago y graciasporsucompra)
* Page Hotel
* Page Auto
* Page Paquete

### PAGE INDEX
Tiene un boton "ver mas" en cada opcion que se ocupa de redirigir a la page paquetes

### PAGE VUELO 
Se deberan completar todos los campos: 

*Eleccion de Tramo* 
* En la pagina de vuelos , se puede selecionar el tramo. En caso de ser solo ida , se visualiza solo fecha de salida y desplegara dos opciones de vuelo , donde se veran los itinerarios de ida con sus precios. En caso de regreso apareceran ambas fechas, opciones de vuelo y precio. 

*Origen y destino*
* Se selecciona origen y destino ,por simplicidad el precio Unitario va a salir lo mismo desde cualquier origen.

*Fecha de ida*
* Se mostrara cuando el usuario seleccione ida y vuelta.

*Fecha de regreso*
* Se mostrara cuando el usuario solo seleccione tramo ida y vuelta, caso contrario este campo no se mostrara.

*Cantidad de pasajeros*
* El usuario debe seleccionar cantidad de pasajeros.

#### COTIZA TU VUELO
Una vez elegidos todos los campos, con el boton se mostrarn los itinerarios , ruta, horarios y precio del destino elegido y el precio final de la cantidad de pasajeros seleccionados. 
En caso de que pax toque el boton continuar pasara a la pantalla de page datos de pax , y guardara la informacion local en caso de que se cierre la ventana. 

### BOTON UTILIZAR ULTIMA BUSQUEDA 
Es un boton que se utiliza para que el usuario clickee y en la pantalla se vea todo lo que habia elegido y habia sido guardado por ultima vez en el localstorage. Guarda los datos hasat la pagina de checkout, si el usuario clickea confirmar pagos, se borran los datos. 

### PAGE DATOS DE PAX 
* El usuario completa los datos para el vuelo , y una vez que el usuario hace click sobre confirmar datos se desplega un cuadro con toda la informacion ingresada por el usuario. Hay dos botones, el confirmar datos que lleva a la siguiente pagina (pages checkout) y hay un error , que automaticamente recarga la pagina para que el usuario complete los datos correctamente. 

### PAGE CHECKOUT DE PAGO 
* El usuario ingresara los datos del pago , en caso de seleccionar diferente cantidad de cuotas aparecere el precio .

### MAIN JS
Se utliza para pages vuelos.

### ARCHIVO JS 
Se utiliza para pages datos del pax.

### CHECK JS
Se utiliza para pages checkout de pagos.

### AUTO JS
Se utiliza para pages de auto.

