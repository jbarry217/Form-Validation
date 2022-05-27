const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');

const firstNameHandler = function(e) {
  /^[A-Z][a-z]+$/.test(e.target.value) 
  ? document.getElementById('fnHelp').className = "greenText" 
  : document.getElementById('fnHelp').className = "redText"
}

const lastNameHandler = function(e) {
  /^[A-Z][a-z]+$/.test(e.target.value) 
  ? document.getElementById('lnHelp').className = "greenText" 
  : document.getElementById('lnHelp').className = "redText"
}

const socialSecurityNumberHandler = function(e) {
  /^[0-9]{3}\-?\.?[0-9]{2}\-?\.?[0-9]{4}$/.test(e.target.value)
  ? document.getElementById('ssnHelp').className = "greenText"
  : document.getElementById('ssnHelp').className = "redText"
}

const emailHandler = function(e) {
  /^([A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))(com|net|org)$/i.test(e.target.value)
  ? document.getElementById('emailHelp').className = "greenText"
  : document.getElementById('emailHelp').className = "redText"
}

const userNameHandler = function(e) {
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{7,12}$/.test(e.target.value)
  ? document.getElementById('unHelp').className = "greenText"
  : document.getElementById('unHelp').className = "redText"
}
const passwordHandler = function(e) {
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{9,15}$/.test(e.target.value)
  ? document.getElementById('pwHelp').className = "greenText"
  : document.getElementById('pwHelp').className = "redText"
}

firstName.addEventListener('input', firstNameHandler);
lastName.addEventListener('input', lastNameHandler);
socialSecurityNumber.addEventListener('input', socialSecurityNumberHandler);
email.addEventListener('input', emailHandler);
userName.addEventListener('input', userNameHandler);
password.addEventListener('input', passwordHandler);

