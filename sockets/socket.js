const { io } = require('../index');

// Mensajes de sockets
io.on('connection', client => {
    console.log('Cliente conectado');
    
    client.on('disconnect', () => { 
        console.log('cliente desconectado');
    });


    client.on('mensaje', ( payload ) => {
        console.log('Mensaje de ', payload);

        io.emit( 'mensaje', {admin: 'nuevo mensaje'} );
    })
  });

