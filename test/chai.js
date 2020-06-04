const mongoose = require("mongoose");
const Fiche = require('../api/database/ficheModel');

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = require('chai').should();


chai.use(chaiHttp);
//Our parent block
describe('Fiche', () => {
    beforeEach((done) => { //Before each test we empty the database
        Fiche.deleteOne({}, (err) => { 
           done();           
        });        
    });

    /*
    * Test the /GET route
    */
    describe('/GET fiche', () => {
        it('it should GET all the fiches', (done) => {
            chai.request(app)
                .get('/admin/createFiche')
                .end((err, res) => {
                    if (err) return done(err)
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                done();
                });
        });
    });

    /*
    * Test the /POST route
    */
    describe('/POST fiche', () => {
        it('it should POST a fiche', (done) => {
            let fiche = {
                whiskyName: 'test chai post',
            }
            chai.request(app)
                .post('/admin/createFiche')
                .send(fiche)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                done();
            });
        });
    });

    /*
    * Test the /GET/:id route
    */
    describe('/GET/:id fiche', () => {
        it('it should GET a fiche by the given id', (done) => {
            let fiche = new Fiche({ whiskyName: "test chai id"});
            fiche.save((err, fiche) => {
            chai.request(app)
                .get('/admin/createFiche' + fiche.id)
                .send(fiche)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.a('object');
                    done();
                });
            });
        });
    });

    /*
    * Test the /PUT/:id route
    */
    describe('/PUT/:id fiche', () => {
        it('it should UPDATE a fiche given the id', (done) => {
            let fiche = new Fiche({whiskyName: "test chai id", origine:"Ecosse"})
            fiche.save((err, fiche) => {
            chai.request(app)
                .put('/admin/fiche/' + fiche.id)
                .send({whiskyName: "test chai id", origine:"France"})
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        });
    });

    /*
    * Test the /DELETE/:id route
    */
    describe('/DELETE/:id fiche', () => {
        it('it should DELETE a fiche given the id', (done) => {
            let fiche = new Fiche({whiskyName: "test chai id"})
            fiche.save((err, fiche) => {
            chai.request(app)
                .delete('/admin/fiche/' + fiche.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
            });
        });
    });
});
