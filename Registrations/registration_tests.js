describe('Greet', function() {
    it('Should display a registration from Cape town', function() {
        var display = Registration()
        display.setRegNumbers('CA')
        assert.equal(display.displayRegistrations(""), '');
    });

    it('Should display a registration from Bellville', function() {
        var display = Registration()
        display.setRegNumbers('CY')
        assert.equal(display.displayRegistrations(""), '');


    });
    it('Should display a registration from Stellenbosch', function() {
        var display = Registration()
        display.setRegNumbers('CL')
        assert.equal(display.displayRegistrations(""), '');


    });
});