const { io } = require('../server')

io.on('connection', (client) => {
    console.log('Cliente (Usuario) conectado');

    client.emit('envioMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido!!'
    });

    client.on('disconnect', () => {
        console.log('Cliente (Usuario) desconectado');
    });

    // Escuchar cliente
    client.on('envioMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('envioMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }


    });
});