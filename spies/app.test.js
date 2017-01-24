const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('app', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Ken', 25);
        expect(spy).toHaveBeenCalledWith('Ken', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'ken@example.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });

});