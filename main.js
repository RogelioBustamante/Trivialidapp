//Elementos
let  trivalidappButton = document.querySelector('#button');
let mensaje = document.getElementById('mensaje')
let mensajeComplemento = document.getElementById('mensajeComplemento')

//BOTON
trivalidappButton.addEventListener('click', crearMensaje);

//VARIABLE PARA ALMACENAR EL ULTIMO NUMERO GENERADO: ESTO ES POR SI SALE DOS VECES EL MISMO NUMERO, VA A DAR LA MISMA RESPUESYA Y YO NO QUIERO ESO, ENTONCES LO ALMACENO EN UNA VARIABLE PARA COMPARARLO LUEGO CON EL NUEVO NUMERO QUE GENERE.
let ultimoNumero = null

function crearMensaje() {
    //Generar numero al azar
    let numeroAzar = Math.floor(Math.random() * 101);
    //Comparo el ultimo numero con el nuevo generado:
    if (numeroAzar === ultimoNumero) {((numeroAzar + 30) % 101)} //Esto es para evitar que el nuenvo numero sea mayo a 100. 
    //si es PAR -> SI
    if (numeroAzar % 2 === 0) {
        mensaje.textContent = 'SI'
        //SI ESTA ENTRE 0 Y 20
        if (numeroAzar > 0 && numeroAzar <=20) {mensajeComplemento.textContent = 'Claro que si'} ;
        //SI ESTA ENTRE 21 Y 40
         if (numeroAzar > 21 && numeroAzar <=40) {mensajeComplemento.textContent = 'Porsupuesto'} ;
        //SI ESTA ENTRE 41 Y 60
         if (numeroAzar > 41 && numeroAzar <=60) {mensajeComplemento.textContent = 'La vida es una sola'} ;
        //SI ESTA ENTRE 61 Y 80
         if (numeroAzar > 61 && numeroAzar <=80) {mensajeComplemento.textContent = 'Pero piensalo bien'} ;
        //SI ESTA ENTRE 81 Y 100
         if (numeroAzar > 81 && numeroAzar <=100) {mensajeComplemento.textContent = 'Pero solo esta vez'} ;
    }
    if (numeroAzar % 2 !== 0) {
        mensaje.textContent = 'NO'
        //SI ESTA ENTRE 0 Y 20
        if (numeroAzar > 0 && numeroAzar <=20) {mensajeComplemento.textContent = 'No es el momento'} ;
        //SI ESTA ENTRE 21 Y 40
         if (numeroAzar > 21 && numeroAzar <=40) {mensajeComplemento.textContent = 'Tal vez otro día'} ;
        //SI ESTA ENTRE 41 Y 60
         if (numeroAzar > 41 && numeroAzar <=60) {mensajeComplemento.textContent = 'No vale la pena'} ;
        //SI ESTA ENTRE 61 Y 80
         if (numeroAzar > 61 && numeroAzar <=80) {mensajeComplemento.textContent = 'No por ahora'} ;
        //SI ESTA ENTRE 81 Y 100
         if (numeroAzar > 81 && numeroAzar <=100) {mensajeComplemento.textContent = 'No pienses más en eso'} ;
    }
 
}
