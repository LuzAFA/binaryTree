'use stricts'


let chai = require('chai');
var expect = require("chai").expect;
let chaiHttp = require('chai-http');
var controller = require('../controllers/treeController');

chai.use(chaiHttp);
const url = 'http://localhost:8080/bt';

describe("Binary Tree Routes tests ", function () {

    it('/new route, should insert a tree', (done) => {
        chai.request(url)
            .post('/new')
            .send({id: 10, nodes: [1, 2, 3], edges: [{"from": 1, "to": 3}, {"from": 1, "to": 2}]})
            .end(function (err, res) {
                expect(res.status).to.satisfy(status => {
                    if ((status === 409) || (status === 200)) {
                        return true;
                    } else {
                        return false;
                    }
                });
                done();
            });
    });

    it('/new route, shouldn´t insert a tree, tree id already exist', (done) => {
        chai.request(url)
            .post('/new')
            .send({id: 4, nodes: [1, 2, 3], edges: [{"from": 1, "to": 3}, {"from": 1, "to": 2}]})
            .end(function (err, res) {
                expect(res).to.have.status(409);
                done();
            });
    });

    it('/trees route, should list all binary trees', (done) => {
        chai.request(url)
            .get('/trees')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('/tree/:id route, should return the binary Tree with id 10', (done) => {
        chai.request(url)
            .get('/tree/10')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });

    it('/tree/:id route, shouldn´t return the binary Tree, id 12 not not existing', (done) => {
        chai.request(url)
            .get('/tree/12')
            .end(function (err, res) {
                expect(res).to.have.status(500);
                done();
            });
    });

    it('/ancestor/:id route, should return the lowest common ancestor if tree exist', (done) => {
        chai.request(url)
            .post('/ancestor/4')
            .send({
                "node1": 44,
                "node2": 74
            })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done();
            });
    });
});

describe("Binary Tree lowest common ancestor tests ", function () {

    it('/ancestor/4 with node1: 29 and node2: 44, lowest common ancestor should return 39', (done) =>
    {
        chai.request(url)
            .post('/ancestor/4')
            .send({
                "node1": 29,
                "node2": 44
            })
            .end(function (err, res) {
                expect(res.body.lca).to.equals(39);
                done();
            });
    });

    it('/ancestor/4 with node1: 44 and node2: 85, lowest common ancestor should return 67', (done) =>
    {
        chai.request(url)
            .post('/ancestor/4')
            .send({
                "node1": 44,
                "node2": 85
            })
            .end(function (err, res) {
                expect(res.body.lca).to.equals(67);
                done();
            });
    });

    it('/ancestor/4 with node1: 83 and node2: 87 lowest common ancestor should return 85', (done) =>
    {
        chai.request(url)
            .post('/ancestor/4')
            .send({
                "node1": 83,
                "node2": 87
            })
            .end(function (err, res) {
                expect(res.body.lca).to.equals(85);
                done();
            });
    });

});