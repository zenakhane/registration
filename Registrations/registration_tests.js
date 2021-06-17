describe('RegNumber', function() {
    it('Should display a registration from Cape town', function() {
        var display = RegNumber()
        display.setRegNumbers('CA 123-978')
        assert.equal(display.displayRegistrations('CA 123-978'), 'CA 123-978');
    });

    it('Should display a registration from Bellville', function() {
        var display = RegNumber()
        display.setRegNumbers('CY 156-987')
        assert.equal(display.displayRegistrations('CY 156-987'), 'CY 156-987');


    });
    it('Should display a registration from Stellenbosch', function() {
        var display = RegNumber()
        display.setRegNumbers('CL 759-984')
        assert.equal(display.displayRegistrations('CL 759-984'), 'CL 759-984');

    });
});
describe('Errors', function() {
    it('Should return error if there is no registration entered ', function() {
        var display = RegNumber()
        assert.equal(display.regErrors(''), 'Please enter a registration!');
    });

    it('Should return error if input is only characters', function() {
        var display = RegNumber();
        assert.equal(display.regErrors('sdxcfvg'), 'Please enter a valid registration');


    });
    it('Should return an error if input is only numbers', function() {
        var display = RegNumber()
        assert.equal(display.regErrors(1236549), 'Please enter registration location');
    });
});