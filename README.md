# OptimizandoPF-PIZZUTTI

## PAGINAS
* Index
* Page Vuelo y proceso de compra (pages datosdepax, checkoutdepago y graciasporsucompra)
* Page Hotel
* Page Auto
* Page Paquete

### PAGE INDEX
Tiene un botón "ver mas" en cada opción que se ocupa de redirigir a la page paquetes.

### PAGE VUELO 
Se deberán completar todos los campos: 

*Elección de Tramo* 
* En la página de vuelos , se puede selecionar el tramo. En caso de ser solo ida , se visualiza solo fecha de salida y desplegará dos opciones de vuelo , donde se verán los itinerarios de ida con sus precios. En caso de regreso aparecerán ambas fechas, opciones de vuelo y precio. 

*Origen y destino*
* Se selecciona origen y destino ,por simplicidad el precio Unitario va a salir lo mismo desde cualquier origen.

*Fecha de ida*
* Se mostrará cuando el usuario seleccione ida y vuelta.

*Fecha de regreso*
* Se mostrará cuando el usuario solo seleccione tramo ida y vuelta, caso contrario este campo no se mostrará.

*Cantidad de pasajeros*
* El usuario debe seleccionar cantidad de pasajeros.

#### COTIZA TU VUELO
Una vez elegidos todos los campos, con el botón se mostrarán los itinerarios , ruta, horarios y precio del destino elegido y el precio final de la cantidad de pasajeros seleccionados. 
En caso de que el usuario toque el botón continuar pasará a la pantalla de page datos de pax , y guardará la información local en caso de que se cierre la ventana. 

### BOTÓN UTILIZAR ÚLTIMA BÚSQUEDA 
Es un botón que se utiliza para que el usuario clickee y en la pantalla se vea todo lo que había elegido y había sido guardado por última vez en el localstorage. Guarda los datos hasta la página de checkout, si el usuario clickea confirmar pagos, se borran los datos. 

### PAGE DATOS DE PAX 
* El usuario completa los datos para el vuelo , y una vez que el usuario hace click sobre confirmar datos se desplega un cuadro con toda la información ingresada por el usuario. Hay dos botones, el confirmar datos que lleva a la siguiente página (pages checkout) y el botón : hay un error , que automáticamente recarga la página para que el usuario complete los datos correctamente. 

### PAGE CHECKOUT DE PAGO 
* El usuario ingresará los datos del pago , en caso de seleccionar diferentes cantidad de cuotas aparecerá el precio.

### MAIN JS
Se utliza para pages vuelos.

### ARCHIVO JS 
Se utiliza para pages datos del pax.

### CHECK JS
Se utiliza para pages checkout de pagos.

### AUTO JS
Se utiliza para pages de auto.

