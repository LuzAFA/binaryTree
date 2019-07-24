const Tree = require('../DAO/binaryTreeDao');
let treeData = [];

//consultar UN arbol
exports.getTree = (req, res, next) => {
    const id = req.params.id;
    Tree.findOne({id: id}, (err, doc) => {
        if (err || (doc === null)) {
            res.status(500).send("Server Error - Something wrong when find!");
        } else {

            const data = {
                id: doc.id,
                nodes: doc.nodes,
                edges: doc.edges
            };
            res.status(200).send({data})
        }
    });
};

//consultar arboles
exports.getTrees = async (req, res) => {
    const trees = await Tree.find();
    res.json(trees);
};


//editar arbol
exports.editTree = async (req, res) => {
    const id = parseInt(req.params.id);
    const newTree = {
        id: req.body.id,
        nodes: req.body.nodes,
        edges: req.body.edges
    };
    await Tree.findOneAndUpdate({id: id}, {$set: newTree}, {new: true});
    Tree.findOne({id: id}, (err, doc) => {
        if (err || (doc === null)) {
            res.status(500).send("Server Error - Something wrong whit the tree!");
        }
        res.send(doc)
    });
};

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
        if (err) return res.status(500).send("Server Error");
        //manda a front
        res.send(saved)
    });
};


//****** manejo menor ancestro comun******//

//llamado de informacion del arbol desde db
loadTreeData = (id, res, callback) => {
    Tree.find({id: id}, function (err, result) {
        if (err) {
            callback(err, null);
            res.status(500).send(err);
        } else {
            result = {'lca': callback(null, result)};
            res.status(200).send(result);
        }
    });
};

//retorna lista de ascendientes segun el nodo
getAncestors = (idNode, fathers) => {
    let childNode = {};
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == idNode) {
            childNode = nodes[i];
            fathers.push(childNode.father);
        }
    }
    if (childNode.father != -1) {
        getAncestors(childNode.father, fathers)
    }
    return fathers;
};

//reordena el grafo y busca los ascendientes del nodo
ordenedNodeAncestors = (idNode) => {
    nodes = treeData.nodes.reverse();
    let fathers = [];
    getAncestors(idNode, fathers);
    return fathers;
};

//establece el ascendente mas cercano
firstCommonAncestor = (ancestors1, ancestors2) => {
    let result;
    for (let an1 of ancestors1) {
        for (let an2 of ancestors2) {
            if (an1 === an2 && an1 !== -1) {
                result = an1;
                return an1;
            }
        }
    }
    return result;
};

exports.lowestCommonAncestor = async (req, res, next) => {

    let nana = [];
    let d = await loadTreeData(req.params.id, res, (err, doc) => {
        if (err) {
            console.log(err);
            return err;
        }
        treeData = doc[0];
        n1a = ordenedNodeAncestors(req.body.node1);
        n2a = ordenedNodeAncestors(req.body.node2);
        return firstCommonAncestor(n1a, n2a);
    });

};



