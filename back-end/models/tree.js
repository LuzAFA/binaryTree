const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.set('useCreateIndex', true);
const treeSchema = new Schema({  // Schema es el Conector entre Node y Mongo

    "id": {type: String, unique: true},
    "nodes": {type: []},
    "edges": {type: []}
});

module.exports = treeSchema;
