const amqp = require('amqplib/callback_api');

class Publisher {
    constructor(){
        amqp.connect('amqp://localhost', function(e0, connection){
            if(e0) throw e0;

            connection.createChannel(function(e1, channel){
                if(e1) throw e1;

                let queue = 'Cola1';
                let msg = 'Hola mundo';

                channel.assertQueue(queue, {
                    durable: true
                });

                channel.sendToQueue(queue, Buffer.from(msg), {
                    persistent: true
                });
                console.log(` [x] Sent ${msg}`);
            });

            setTimeout(function(){
                connection.close();
                process.exit(0);
            }, 500);
        });
    }
}

const pub = new Publisher();