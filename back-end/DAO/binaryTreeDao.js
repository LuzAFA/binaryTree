const mongoose = require('mongoose');
const treeShema = require('../models/tree');

treeShema.statics = {
    create: function (data, cb) {
        const tree = new this(data);
        tree.save(cb);
    },
};

const treeModel = mongoose.model('tree', treeShema);

module.exports = treeModel;

