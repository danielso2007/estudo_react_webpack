const mongoose = require('mongoose'); // Conexão e mapeamento com o mongo.
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/todo');