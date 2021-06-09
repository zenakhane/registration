function RegNumber() {

    var regDisplay = []
    var registrationDisplay = 0

    function displayRegistrations(reg, location) {
        if (location === 'Cape Town') {
            return 'CA' + reg

        } else if (location === 'Bellville') {
            return 'CY' + reg

        } else if (location === 'Stellenbosch') {
            return 'CL' + reg

        }
    }

    function setRegNumbers(location) {
        if (!regDisplay.includes(location)) {
            registrationDisplay++
            regDisplay.push(location)
            return true
        }

    }

    function getRegDisplay() {
        return regDisplay
    }

    function setRegDisplay(location) {
        regDisplay = location
    }

    function getRegistrationDisplay() {
        return registrationDisplay
    }

    return {
        displayRegistrations,
        setRegDisplay,
        getRegDisplay,
        setRegNumbers,
        getRegistrationDisplay

    }
}