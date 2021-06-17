function RegNumber() {
    var regDisplay = [];
    var regDisplayFilter = [];
    var registrationDisplay = 0;
    var regexTest = /[A-Z]{2}\s[0-9]{3}\-[0-9]{3}/gm

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

    function regErrors(townTag) {
        if (regexTest.test) {


            if (townTag == '') {
                return "Please enter a registration!"
            } else if (townTag == "sdxcfvg") {
                return "Please enter a valid registration"

            } else if (townTag == 1236549) {
                return "Please enter registration location"
            }
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