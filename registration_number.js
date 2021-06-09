regNumElem = document.querySelector(".regNumber")
capeElement = document.querySelector(".Cape_Town")
bellElement = document.querySelector(".Bellville")
stellieElement = document.querySelector(".Stellenbosch")
reg = document.querySelector(".registration")
addButton = document.querySelector(".addBtn")

var registrations = RegNumber()

var regDisplay = []

if (localStorage['registrations']) {
    regDisplay = JSON.parse(localStorage.getItem('registrations'))

}
registrations.setRegDisplay(regDisplay)

function displayFunction(passedItem) {
    var x = document.createElement("LI");
    var t = document.createTextNode(passedItem);
    x.appendChild(t);
    document.getElementById("myList").appendChild(x);
}

function registrationNum() {
    displayFunction(reg.value)
        // var registrationBtn = document.querySelector("input[name='reg']:checked");
        // // var regButton = registrationBtn.split(", ")
        // regiButtons()
        // if (registrations.setRegNumbers(reg.value)) {
        //     localStorage.setItem('registrations', JSON.stringify(registrations.getRegDisplay()))
        // }
}

function regiButtons() {
    var registrationBtn = document.querySelector("input[name='langs']:checked");
    registrationBtn.checked = false;
}

addButton.addEventListener('click', registrationNum)