const functions = {
  showMessage: function() {
    this.message = 'Hello World'
    console.log(this.message)
  },
  affiche: function(message, person) {
    this.message = message
    this.person = person
    console.log(`${message} from ${person}`)
  },
  sum: function(x, y) {
    console.log(x + y)
  },
  alert: function(a, b) {
    console.log(sum(a, b))
  }
}
function sum(a, b) {
  return a + b
}

/* functions.showMessage()
functions.affiche('Salue', 'LenixDev')
functions.sum(2, 3)
functions.alert(1, 2) */

function prodNumber(x, y) {
  return x * y
}

function Opposite(x, y) {
  const result = (x - y) / 2
  return result === x ? 'Opposite' : 'Not Opposite'
}

let result = 0
const num1 = Number(prompt("Enter the number:"))
const num2 = Number(prompt("Enter the number:"))
const num3 = Number(prompt("Enter the number:"))
const num4 = Number(prompt("Enter the number:"))
const firstTwo = [num1, num2];
const secondTwo = [num3, num4];

function Maximum(x, y) {
  x.forEach(element => {
    if (result < element ) {
      result = element
    }
  });
  y.forEach(element => {
    if (result < element ) {
      result = element
    }
  })
}

Maximum(firstTwo, secondTwo)


/* const num1 = Number(prompt("Enter the first number:"))
const num2 = Number(prompt("Enter the second number:"))
const result = prodNumber(num1, num2) */

/* const num1 = Number(prompt("Enter the positive number:"))
const num2 = Number(prompt("Enter the negative number:"))
const result = Opposite(num1, num2) */

document.write("The bigger is: " + result)
