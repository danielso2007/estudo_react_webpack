
const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);
Todo.updateOptions({new: true, runValidators: true}); // Configuração para retornar o registro atualizado e valida no update do mongo.

module.exports = Todo;