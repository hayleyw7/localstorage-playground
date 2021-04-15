// Query selectors

var names = document.querySelector('#name')
var email = document.querySelector('#email')
var registerBtn = document.querySelector('#register-btn')
var displayBtn = document.querySelector('#display-btn')

// Event listeners

registerBtn.addEventListener('click', addContact)

// Functions

class EmailInput {
  constructor(names, email) {
    this.name = names.value
    this.email = email.value
  }
}
function addContact() {
  var newEmail = new EmailInput(names, email)
  var string = JSON.stringify(newEmail)
  var parsed = localStorage.setItem('newEmail', string)
}