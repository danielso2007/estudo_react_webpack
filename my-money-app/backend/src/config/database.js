const mongoose = require('mongoose');
// Usar os promises do Node
mongoose.Promise = global.Promise;
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true });