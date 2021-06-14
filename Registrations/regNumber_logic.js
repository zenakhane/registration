function RegNumber() {

    var regDisplay = [];
    var regDisplayFilter = [];
    var registrationDisplay = 0;
    var regexTest = /[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/$

    function displayRegistrations(townTag) {
        regDisplayFilter = [];
        for (var i = 0; i < regDisplay.length; i++) {
            let town = regDisplay[i].trim();
            if (town.startsWith(townTag)) {
                regDisplayFilter.push(town)
            }
        }
        return regDisplayFilter
    }

    function setRegNumbers(register) {
        console.log(regexTest.test(register))
        if (!regDisplay.includes(register)) {
            registrationDisplay++;
            regDisplay.push(register);
            return true
        }
    }

    function getRegDisplay() {
        return regDisplay
    }

    function setRegDisplay(register) {
        regDisplay = register;
    }

    function getRegistrationDisplay() {
        return registrationDisplay
    }

    function regErrors(register) {
        if (register === " ") {
            return "Please enter a registration"
        } else {
            return "Please select a town to display"
        }
    }

    return {
        displayRegistrations,
        setRegDisplay,
        getRegDisplay,
        setRegNumbers,
        getRegistrationDisplay,
        regErrors

    }
}