function RegNumber() {
    var regDisplay = [];
    var regDisplayFilter = [];
    var registrationDisplay = 0;


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
        register = register.toUpperCase();
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
        // register = register.charAt(0).toUpperCase() + register.slice(2);
        regDisplay = register;
    }

    function getRegistrationDisplay() {
        return registrationDisplay
    }

    function regErrors(registration) {

        if (registration == '') {
            return "Please enter a registration!"

        }
        //     if (townTag == "sdxcfvg") {
        //         return "Please enter a valid registration"

        //     } else if (!townTag) {
        //         return "Please enter registration location"
        //     }
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