// CODE FOR GENERATE-PIN BUTTON
function randomPinGenerate() {
    let randomPin = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    document.getElementsByClassName("form-control")[0].value = randomPin;
    document.getElementsByClassName("notify")[1].style.display = 'none';
    document.getElementsByClassName("form-control")[1].value = '';
}

// CODE FOR LOCKER INPUT
function inputNumber(number) {
    let lockerInput = document.getElementsByClassName("form-control")[1];
    if (lockerInput.value.length < 4) {
        lockerInput.value += number;
    }
    if (number == '') {
        lockerInput.value = lockerInput.value.slice(0, -1);
    }
    if (number == ' ') {
        lockerInput.value = '';
    }
}

// CODE FOR MATCHING PIN & SHOWING NOTIFICATION
const pinMatchedNotify = document.getElementsByClassName("notify")[1];
const pinNotMatchedNotify = document.getElementsByClassName("notify")[0];
function checkPin() {
    if (document.getElementsByClassName("form-control")[0].value == '' || document.getElementsByClassName("form-control")[1].value == '') {
        document.getElementsByClassName("submit-btn")[0].setAttribute('disabled');
    }
    if (document.getElementsByClassName("form-control")[0].value === document.getElementsByClassName("form-control")[1].value) {
        pinMatchedNotify.style.display = 'block';
        pinNotMatchedNotify.style.display = 'none';
    } else {
        pinNotMatchedNotify.style.display = 'block';
        pinMatchedNotify.style.display = 'none';
        let actionNumberForSubmit = document.getElementsByClassName('action-number')[0];
        actionNumberForSubmit.innerText = parseInt(actionNumberForSubmit.innerText) - 1;
        if (actionNumberForSubmit.innerText == 0) {
            document.getElementsByClassName("submit-btn")[0].style.display = "none";
        }
    }
}