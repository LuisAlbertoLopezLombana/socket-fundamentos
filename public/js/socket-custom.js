var socket = io();

//Escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor desde front');
})

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor desde front');
})

// Enviar/Emitir información al servidor
socket.emit('envioMensaje', {
    usuario: 'Luis Alberto',
    mensaje: 'Mi mensaje'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

socket.on('envioMensaje', function(serverMensaje) {
    console.log(serverMensaje);
});