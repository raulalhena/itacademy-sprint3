const amqp = require('amqplib/callback_api');

class Subscriber{
  constructor(){
    amqp.connect('amqp://localhost', function(error0, connection) {
      if (error0) {
        throw error0;
      }
      connection.createChannel(function(error1, channel) {
        if (error1) {
          throw error1;
        }
        var queue = 'Cola1';

        channel.assertQueue(queue, {
          durable: true
        });

        console.log(` [*] Waiting for messages in ${queue}`);
        channel.consume(queue, function(msg){
            console.log(` [x] Recieved ${msg.content.toString()}`);
            
        },{ 
            noAck: true 
        });
      });
    });
  }
}

const subs = new Subscriber();