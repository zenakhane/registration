describe('RegNumber', function() {
    it('Should display a registration from Cape town', function() {
        var display = RegNumber()
        display.displayRegistrations('CA')
        assert.equal(display.displayRegistrations(), 'CA 123-978');
    });

    it('Should display a registration from Bellville', function() {
        var display = RegNumber()
        display.displayRegistrations('CY')
        assert.equal(display.displayRegistrations(), 'CY 156-987');


    });
    it('Should display a registration from Stellenbosch', function() {
        var display = RegNumber()
        display.displayRegistrations('CL')
        assert.equal(display.displayRegistrations(), 'CL 759-984');


    });
});