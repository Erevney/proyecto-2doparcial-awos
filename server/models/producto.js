const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let productoSchema = new Schema ({
    _id: {
        type: String,
        required: [true, 'El id es necesario']  
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
        unique: true
    },
    preciouni:{
        type: String,
        required: [true, 'El precio es necesario']
    },
    categoria: {
        type: Schema.Types.String,
        required: [true, 'La categoria es necesaria']  
    },
    usuario: {
        type: Schema.Types.String,
        ref: 'Usuario'
    },
    estado: {
        type: Boolean,
        default: true
    },

});
module.exports = mongoose.model('Producto', productoSchema);