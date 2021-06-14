var regNumElem = document.querySelector(".regNumber");
var capeElement = document.querySelector(".Cape_Town");
var bellElement = document.querySelector(".Bellville");
var stellieElement = document.querySelector(".Stellenbosch");
var reg = document.querySelector(".registration");
var addButton = document.querySelector(".addBtn");
var showButtonElem = document.querySelector(".Show")
var error = document.querySelector(".error");
var registrationBtn = document.querySelector("input[name='reg']:checked");
var displayButton = document.querySelector(".display")


var registrations = RegNumber();

var regDisplay = [];


if (localStorage['registrations']) {
    regDisplay = JSON.parse(localStorage.getItem('registrations'))
}
displayFunction(regDisplay)
registrations.setRegDisplay(regDisplay)

function displayFunction(registraNumber) {
    document.getElementById("myList").innerHTML = ""
    for (var i = 0; i < registraNumber.length; i++) {
        var list = document.createElement("LI");
        var regList = document.createTextNode(registraNumber[i]);
        list.appendChild(regList);
        document.getElementById("myList").appendChild(list);
    }
}

function filterFun() {
    var registrationBtn = document.querySelector("input[name='reg']:checked");
    if (registrationBtn) {
        registrationBtn = registrationBtn.value
        var regiDisplay = registrations.displayRegistrations(registrationBtn)
        if (regiDisplay.length !== 0) {
            displayFunction(regiDisplay)
        } else {
            document.getElementById("myList").innerHTML = "Nothing to display yet!!!!!!!!!!!!"
        }
    }
}

function registrationNum() {
    console.log(reg.value)
    registrations.displayRegistrations()
    if (registrations.setRegNumbers(reg.value)) {
        localStorage.setItem('registrations', JSON.stringify(registrations.getRegDisplay()))
    }
}

function regiButtons() {
    var registrationBtn = document.querySelector("input[name='reg']:checked");
    registrationBtn.checked = false;
}
addButton.addEventListener('click', registrationNum)
displayButton.addEventListener('click', filterFun)