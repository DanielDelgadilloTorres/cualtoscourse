
var mongosse = require('mongoose');

exports.connectToDB = function(){
    mongosse.connect(
        'mongodb+srv://dbUser:TaU0tUuunP4DmCv5@cluster0-mjwq6.mongodb.net/sample_mflix?retryWrites=true&w=majority',
        {
          user:'',
          pass:'',
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true
        }
    );
    
    
    
    process.on('SIGINT', function(){
    
      mongosse.connections.close(function(){
        console.log("Connection closed");
      });
      
    })
}