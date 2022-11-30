const mongoose = require('mongoose');

function connect(callback) {
  mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
    connectTimeoutMS: 300000,
  });
  mongoose.connection.on('error', (erro) => console.error(error));
  mongoose.connection.once('open', () => console.log('Connected to database'));
  callback();
}

module.exports = connect;
