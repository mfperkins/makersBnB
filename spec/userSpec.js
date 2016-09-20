var User = require('../src/user');

describe ("User", function() {
  var user = new User();

  describe ("on startup", function() {

    it("user should have a first name", function() {
      expect(user.firstname).not.toBeDefined();
    });

  });

});
