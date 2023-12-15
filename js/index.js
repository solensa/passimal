// $(document).ready(function() {
//
// });

var passwordInput = document.getElementById("txtPassword"),
  toggle = document.getElementById("btnToggle"),
  // icon = document.getElementById('eyeIcon');
  pokebtn = document.getElementById("pokebtn");
checkboxList = document.getElementById("checkboxWrapper");

function togglePassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggle.classList.add("openEye");
    toggle.classList.remove("closedEye");
    //toggle.innerHTML = 'hide';
  } else {
    passwordInput.type = "password";
    toggle.classList.add("closedEye");
    toggle.classList.remove("openEye");
    //toggle.innerHTML = 'show';
  }
}

var hiveImg = 0;
var showPokemon = false;
function toggleImages() {
  showPokemon = !showPokemon;
  if (showPokemon) {
    pokebtn.classList.add("trainerWithdraw");
    pokebtn.classList.remove("iChooseYou");
  } else {
    pokebtn.classList.add("iChooseYou");
    pokebtn.classList.remove("trainerWithdraw");
  }
  checkInput();
}

function checkInput() {
  console.log(passwordInput.value);

  var passwordPoints = 0;
  document.getElementById("checkbox1").checked = false;
  document.getElementById("checkbox2").checked = false;
  document.getElementById("checkbox3").checked = false;
  document.getElementById("checkbox4").checked = false;
  document.getElementById("checkbox5").checked = false;
  document.getElementById("checkbox6").checked = false;
  document.getElementById("checkbox7").checked = false;
  document.getElementById("checkbox8").checked = true;
  document.getElementById("checkbox9").checked = true;
  document.getElementById("checkbox10").checked = true;

  if (passwordInput.value === "") {
    checkboxList.style.display = "none";
    // toggle.innerHTML = 'show';
    // passwordInput.type = 'password';
  } else {
    checkboxWrapper.style.display = "inline-block";

    // Checkboxes removed due to amendments on 23.09.19

    // if (passwordInput.value.length > 7){
    //   passwordPoints = passwordPoints + 1;
    //   document.getElementById("checkbox1").checked = true;
    // }
    // if (passwordInput.value.length > 8){
    //   passwordPoints = passwordPoints + 1;
    //   document.getElementById("checkbox2").checked = true;
    // }
    // if (passwordInput.value.length > 9) {
    //   passwordPoints = passwordPoints + 1;
    //   document.getElementById("checkbox3").checked = true;
    // }

    // New section from amendments (Under 10 and Over 12)

    if (passwordInput.value.length > 10) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox2").checked = true;
    }
    if (passwordInput.value.length > 12) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox3").checked = true;
    }

    // End new section

    if (hasLowerCase(passwordInput.value)) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox4").checked = true;
    }
    if (hasUpperCase(passwordInput.value)) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox5").checked = true;
    }
    if (!passwordInput.value.match(/^[0-9a-zA-Z]+$/)) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox6").checked = true;
    }
    if (passwordInput.value.match(/\d+/g)) {
      passwordPoints = passwordPoints + 1;
      document.getElementById("checkbox7").checked = true;
    }

    if (!String.prototype.includes) {
      String.prototype.includes = function () {
        "use strict";
        return String.prototype.indexOf.apply(this, arguments) !== -1;
      };
    }

    var numbers = "0123456789";
    var revNumbers = "9876543210";
    var foundRecurringNumber = false;
    var foundConsecutiveNumber = false;
    var foundWeakPassword = false;

    for (i = 1; i < passwordInput.value.length; i++) {
      var prevChar = passwordInput.value[i - 1];
      var currChar = passwordInput.value[i];
      if (!isNaN(prevChar) && !isNaN(currChar) && !foundRecurringNumber) {
        if (prevChar == currChar) {
          passwordPoints = passwordPoints - 1;
          foundRecurringNumber = true;
          document.getElementById("checkbox8").checked = false;
        }

        var combinedChars = prevChar + currChar;
        if (
          (numbers.includes(combinedChars) || revNumbers.includes(combinedChars)) &&
          !foundConsecutiveNumber
        ) {
          passwordPoints = passwordPoints - 1;
          foundConsecutiveNumber = true;
          document.getElementById("checkbox9").checked = false;
        }
      }
    }
    var foundEnglishWord = false;
    for (i = 0; i < wordsArr.length; i++) {
      if (passwordInput.value.includes(wordsArr[i]) && !foundEnglishWord) {
        // console.log('dict word found');
        passwordPoints = passwordPoints - 1;
        document.getElementById("checkbox10").checked = false;
        foundEnglishWord = true;
      }
    }
    for (i = 0; i < weakPasswordsArr.length; i++) {
      if (passwordInput.value.includes(weakPasswordsArr[i]) && !foundWeakPassword) {
        // console.log('dict word found');
        // passwordPoints = passwordPoints - 1;
        // document.getElementById("checkbox10").checked = false;
        foundWeakPassword = true;
      }
    }
  }

  console.log(passwordPoints);
  if (showPokemon) {
    if (passwordPoints == 0) {
      document.getElementById("topImage").src = "images/poke0.png";
      hiveImg = 10;
    } else if (passwordPoints == 1) {
      document.getElementById("topImage").src = "images/poke1.png";
      hiveImg = 11;
    } else if (passwordPoints == 2) {
      document.getElementById("topImage").src = "images/poke2.png";
      hiveImg = 12;
    } else if (passwordPoints == 3) {
      document.getElementById("topImage").src = "images/poke3.png";
      hiveImg = 13;
    } else if (passwordPoints == 4) {
      document.getElementById("topImage").src = "images/poke4.png";
      hiveImg = 14;
    } else if (passwordPoints == 5) {
      document.getElementById("topImage").src = "images/poke5.png";
      hiveImg = 15;
    } else if (passwordPoints == 6) {
      document.getElementById("topImage").src = "images/poke6.png";
      hiveImg = 16;
    } else if (passwordPoints == 7) {
      document.getElementById("topImage").src = "images/poke7.png";
      hiveImg = 17;
    }
  } else {
    if (passwordPoints == 0) {
      document.getElementById("topImage").src = "images/animal0.png";
      hiveImg = 0;
    } else if (passwordPoints == 1) {
      document.getElementById("topImage").src = "images/animal1.png";
      hiveImg = 1;
    } else if (passwordPoints == 2) {
      document.getElementById("topImage").src = "images/animal2.png";
      hiveImg = 2;
    } else if (passwordPoints == 3) {
      document.getElementById("topImage").src = "images/animal3.png";
      hiveImg = 3;
    } else if (passwordPoints == 4) {
      document.getElementById("topImage").src = "images/animal4.png";
      hiveImg = 4;
    } else if (passwordPoints == 5) {
      document.getElementById("topImage").src = "images/animal5.png";
      hiveImg = 5;
    } else if (passwordPoints == 6) {
      document.getElementById("topImage").src = "images/animal6.png";
      hiveImg = 6;
    } else if (passwordPoints == 7) {
      document.getElementById("topImage").src = "images/animal7.png";
      hiveImg = 7;
    }
  }

  if (foundWeakPassword) {
    if (showPokemon) {
      document.getElementById("topImage").src = "images/emptyball.jpg";
    } else {
      document.getElementById("topImage").src = "images/emptyhorse.jpg";
    }
  }
}

function hasLowerCase(str) {
  return str.toUpperCase() != str;
}
function hasUpperCase(str) {
  return str.toLowerCase() != str;
}

toggle.addEventListener("click", togglePassword, false);
passwordInput.addEventListener("keyup", checkInput, false);
pokebtn.addEventListener("click", toggleImages, false);

function openInNewTab() {
  var url;

  var win = window.open(url, "_blank");
  win.focus();
}
