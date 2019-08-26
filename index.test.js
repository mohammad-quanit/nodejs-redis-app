//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./index');
let should = chai.should();


chai.use(chaiHttp);
describe("/Get Data", () => {
  it('it should GET all the repos', done => {
    chai.request(server)
      .get('/repos/mohammad-quanit')
      .end((err, res) => {
        console.log(res)
        res.should.have.status(200);
        chai.expect(res.text.length).to.deep.equal(45)
        chai.expect(res.text).to.be.a('string');
        // res.body.should.to.equal(45);
        done();
      })
  })
})