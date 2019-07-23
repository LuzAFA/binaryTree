const express = require('express');
const router = express.Router();
const treeControl = require('../controllers/treeController');

//creacion del arbol
router.post('/new', treeControl.createBinaryTree);

//LowestCommonAncestor - Ancestro común más cercano
router.post('/ancestor', treeControl.lowestCommonAncestor);

//consulta del arbol
router.get('/tree/:id', treeControl.getTree);

//editarArbol
router.put('/editTree/:id', treeControl.editTree);



module.exports = router;
