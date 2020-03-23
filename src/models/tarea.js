const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TareasSchema = new Schema({
    titulo: String,
    descripcion: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('tareas', TareasSchema);