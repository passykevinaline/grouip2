/*
 Number Guessing Game
 computer = 1 to 10
 User has to guess the number
 The user gets 3 chances to do so
*/


let userConsent = confirm("Welcome to 'Guess A Number' Game. Click on OK to play.")

if(userConsent) {
 
 // random number generated everytime
let computerNumber = Math.ceil(Math.random()*10)

let counter = 0
 while(counter < 3) {
    let userGuessed = prompt("Please enter a number")
   if(userGuessed == computerNumber) {
    alert("woohoo! you guessed the corect number")
    break
   }
   else {
    alert("Sorry! wrong number")
   }
   counter += 1
 }

 if(counter == 3) {
    alert("Sorry! only 3 guesses allowed")
 }

 // if you want to play again -Restart the game
 let RestartOrNot = confirm("Do you want to play again")
 if(RestartOrNot) {
    location.reload();
 }
 else {
    alert("Ok! May be some other time.")
 }
}
else {
    alert("Ok! May be some other time.")
}