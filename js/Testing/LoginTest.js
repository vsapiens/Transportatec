QUnit.test( "Login_Suitcase" , function( assert ) {
    //test data
    var user1 = "sam@test-2.com";
    var user2 = "samuel@admin.com";
    var user2 = null;
    var user3 = null;
    var pass1 = 1234;
    var pass2 = 4321;
    var pass3 = 4565456;
 
    //Test Case login assert equal login cases
    assert.equal(user1, "sam@test-2.com", "Email is equal");
    assert.equal(user2, "samuel@admin.com", "Email is equal");
 
 
    //Check that the emails are not equal
    assert.notEqual(user1, "samuel@admin.com", "Email 1 is not equal");
    assert.notEqual(user2, "sam@test-2.com", "Email 2 is not equal");
    
    //Check that the password are the same
    assert.ok(1234 == pass1, pass1 + " is the correct password");
    assert.ok(4321 == pass2, pass2 + " is the correct password");
    assert.ok(4565456 == pass3, pass3 + " is the correct password");
 
 
    //Check that the password are different
    assert.notOk(4321 != pass2, pass2 + " is not the correct password");
    assert.notOk(4565456 != pass3, pass3 + " is not the correct password");
    assert.notOk(1234 != pass2, pass2 + " is not the correct password");
    assert.notOk(4565456 != pass1, pass1 + " is not the correct password");
    assert.notOk(1234 != pass1, pass1 + " is not the correct password");
    assert.notOk(4565456 != pass1, pass1 + " is not the correct password");
 
 });
 