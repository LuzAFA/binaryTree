const Tree = require('../DAO/binaryTreeDao');
let treeData = [];
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
documents = (id, callback) => {
    Tree.find({id: id}, function (err, result) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, result);
        }
    });
};

//retorna lista de padres segun el nodo
getFather = (idNode, fathers) => {
    let childNode = {};

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id == idNode) {
            childNode = nodes[i];
            fathers.push(childNode.father);
        }
    }

    if (childNode.father != -1) {
        getFather(childNode.father, fathers)
    }
    return fathers;
};

//ancestros del nodo
nodeAncestors = (idNode) => {
    nodes = treeData.nodes.reverse();
    let fathers = [];
    getFather(idNode, fathers);

    console.log("ancestros ", fathers);
    return fathers;
};

commonAncestor = (ancestors1, ancestors2) => {
    ancestors1.forEach((a1) => {
        ancestors2.forEach((a2) => {
            if (a1 === a2) {
                return a1;
            }
        })
    })
};

exports.lowestCommonAncestor = async (req, res, next) => {
    let d1 = await documents(req.params.id, function (err, doc, res) {
        if (err) {
            console.log(err);
            res.send(err);
        }
        treeData = doc[0];
        n1a = nodeAncestors(req.body.node1);
        n2a = nodeAncestors(req.body.node2);
        console.log(commonAncestor(n1a, n2a), " anterior comun");
    });

    res.send("response e.e")
};


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
};

//consultar arboles
exports.getTrees = async (req, res) => {
    const trees = await Tree.find();
    res.json(trees);
};


//editar arbol
exports.editTree = async (req, res) => {
    const id = parseInt(req.params.id);
    const newUser = {
        tipo_id: req.body.tipo_id,
        id: req.body.id,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        fecha_de_nacimiento: req.body.fecha_nacimiento,
        sexo: req.body.sexo,
        celular: req.body.celular,
        correo: req.body.correo,
        nivel_Salarial: req.body.nivel_Salarial,
        historia_Clinica: req.body.historia_Clinica,
        afiliado_activo: req.body.afilidiado,
        benecificiarios: req.body.benecificiarios,
        plan_Complementario: req.body.plan_Complementario,
        citas_medicas: req.body.citas_medicas,
        tipo_afiliado: req.body.tipo_afiliado,
    };
    await Tree.findOneAndUpdate({id: id}, {$set: newUser}, {new: true}).then(
        console.log("se supone que se actualizo")
    );


    Tree.findOne({id: id}, (err, doc) => {
        if (err) {
            res.status(200).send("Server Error - Something wrong when find user!");
        }
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id: doc._id}, sec_key,
            {
                expiresIn: expiresIn
            });
        const data = {
            id: doc.id,
            name: doc.nombre,
            expire: expiresIn,
            accessToken: accessToken,
            usuario: doc
        };
        //manda a front
        res.send({data})
    });
};

