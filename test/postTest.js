var expect = require("chai").expect,
    post = require('../models/Post.js');

describe('Posts ', function() {

    var testPost = null;

    beforeEach(function(done){
        post.create({
          postId: 7653235,
          message: "My Brother is in the hostipal",
          timeCreated: "Monday, February 22nd 2016, 8:35 pm",
            }, function (doc) {
                testPost = doc;
                done();
        });

    });

    it('ADD a new POST', function(done){
        expect(testPost.postId).to.be.equal(7653235);
        expect(testPost.message).to.be.equal('My Brother is in the hostipal');
        expect(testPost.timeCreated).to.be.equal("Monday, February 22nd 2016, 8:35 pm");
        done();
    });

    it('FIND a POST', function(done){
        post.fetch({userId:testPost.userId}, function(doc){
          expect(testPost.firstName).to.be.equal('Paul');
          expect(testPost.lastName).to.be.equal('Diederichs');
          expect(testPost.phone).to.be.equal(9043074738);
          expect(testPost.email).to.be.equal('pauldiederichs95@gmail.com');
          expect(testPost.username).to.be.equal('developer95');
          expect(testPost.userId).to.be.equal(92715373492);
          expect(testPost.password).to.be.equal('paul');
          expect(testPost.listening.length).to.be.equal(0);
          done();
        });
    });

    it('FIND ALL POSTS', function(done){
        post.fetchAll({},function(docs){
            expect(docs.length).to.be.equal(1);
            done();
        });
    });

    remove all test from db
    it('REMOVE all test POSTS',function (done){
        post.destroy({userId:testPost.userId}, function() {
            post.fetch({username:testPost.username}, function(targetTest){
                expect(targetTest).to.be.null;
                done();
            });
        });
    });
});
