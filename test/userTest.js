var expect = require("chai").expect,
    user = require('../models/User.js');

describe('Users ', function() {

    var testUser = null;

    beforeEach(function(done){
        user.create({
          firstName: "Paul",
          lastName: "Diederichs",
          phone: 9043074738,
          email: "pauldiederichs95@gmail.com",
          username: "developer95",
          userId: 92715373492,
          password:"paul",
          listening: [],
            }, function (doc) {
                testUser = doc;
                done();
        });

    });

    it('ADD a new user', function(done){
        expect(testUser.firstName).to.be.equal('Paul');
        expect(testUser.lastName).to.be.equal('Diederichs');
        expect(testUser.phone).to.be.equal(9043074738);
        expect(testUser.email).to.be.equal('pauldiederichs95@gmail.com');
        expect(testUser.username).to.be.equal('developer95');
        expect(testUser.userId).to.be.equal(92715373492);
        expect(testUser.password).to.be.equal('paul');
        expect(testUser.listening.length).to.be.equal(0);
        done();
    });

    it('FIND a user', function(done){
        user.fetch({userId:testUser.userId}, function(doc){
          expect(testUser.firstName).to.be.equal('Paul');
          expect(testUser.lastName).to.be.equal('Diederichs');
          expect(testUser.phone).to.be.equal(9043074738);
          expect(testUser.email).to.be.equal('pauldiederichs95@gmail.com');
          expect(testUser.username).to.be.equal('developer95');
          expect(testUser.userId).to.be.equal(92715373492);
          expect(testUser.password).to.be.equal('paul');
          expect(testUser.listening.length).to.be.equal(0);
          done();
        });
    });

    // it('FIND ALL users', function(done){
    //     user.fetchAll({},function(docs){
    //         expect(docs.length).to.be.equal(1);
    //         done();
    //     });
    // });

    // it('REMOVE an existing user', function(done){
    //     course.create({
    //         degreeAbbr: "WDD",
    //         abbr: "WXX",
    //         title: "Web User Experience",
    //         }, function (doc) {
    //             var removeCourse = doc;
    //             expect(doc).not.to.be.null;
    //             course.destroy({_id:removeCourse._id}, function() {
    //                 course.fetch({_id:removeCourse._id}, function(targetDoc){
    //                     expect(targetDoc).to.be.null;
    //                     done();
    //                 });
    //             });
    //     });
    // });
    //remove all test from db
    it('REMOVE all test user',function (done){
        user.destroy({userId:testUser.userId}, function() {
            user.fetch({username:testUser.username}, function(targetTest){
                expect(targetTest).to.be.null;
                done();
            });
        });
    });
});
