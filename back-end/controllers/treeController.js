const Tree = require('../DAO/binaryTreeDao');

//creacion del arbol
exports.createBinaryTree = (req, res, next) => {
    console.log(req.body);
    const newTree = {
        id: req.body.id,
        nodes: req.body.nodes,
        edges: req.body.edges
    };
    Tree.create(newTree, (err, saved) => {
        if (err && err.code === 11000) {
            return res.status(409).send("ID existente")
        }
        if (err) return res.status(200).send("Server Error");
        //manda a front
        res.send(saved)
    });
};

//menor ancestro comun
exports.lowestCommonAncestor = (req, res, next) => {};

//consultar UN arbol
exports.getTree = (req, res, next) => {
    const id = req.params.id;
    console.log(id, "id");
    Tree.findOne({id: id}, (err, doc) => {
        if (err) {
            res.status(200).send("Server Error - Something wrong when find!");
        }

        const data = {
            id: doc.id,
            nodes: doc.nodes,
            edges: doc.edges
        };
        //manda a front
        res.send({data})
    });
};//consultar UN arbol

//consultar arboles
exports.getTrees =async (req, res) => {
    const trees = await Tree.find();
    res.json(trees);
};


//editar arbol
exports.editTree = async (req, res) => {};

