"use strict";
//letters
let myLetters = "abcdefghiJklmnopqrstuvwxyz";
//array from letters
let arrayOfLetters = Array.from(myLetters);
//select array container
let contain = document.querySelector(".letters");
arrayOfLetters.forEach((letter) => {
  let theSpan = document.createElement("span");
  let theLetter = document.createTextNode(letter);
  theSpan.appendChild(theLetter);
  theSpan.className = "letters-box";
  contain.appendChild(theSpan);
});

// object of words and categories
const words = {
  countries: [
    "egypt",
    "canada",
    "spain",
    "japan",
    "palastine",
    "turkey",
    "Saudi Arabia"],
  movies: ["parasite", "intersteller", "coco", "up", "tangled"],
  subject: ["math", "chemistry", "biology", "arabic", "physics"],
  language: ["english", "french", "german", "turkish"],
  people: ["Marilyn Monroe", "Nelson Mandela"],
};
let keys = Object.keys(words);
//RANDOM CATEGORY number
let rondomkey = Math.floor(Math.random() * keys.length);
//RANDOM CATEGORY
let rondomCategory = keys[rondomkey];
//RANDOM CATEGORY list
let rondomCategoryList = words[rondomCategory];
//RANDOM CATEGORY value number
let rondomCategoryElementNom = Math.floor(
  Math.random() * rondomCategoryList.length
);
//RANDOM category value
let rondomCategoryElement = rondomCategoryList[rondomCategoryElementNom];
//append caategory into span
let category = document.createTextNode(rondomCategory);
document.querySelector(".category span").appendChild(category);

let lettersGuessContainer = document.querySelector(".letters-guess");
//changing rondomCategoryElement into array
let arrayOfValue = Array.from(rondomCategoryElement);
arrayOfValue.forEach((letter) => {
  let letterSpan = document.createElement("span");
  if (letter == " ") {
    letterSpan.className = "space";
  }
  lettersGuessContainer.appendChild(letterSpan);
 
});

//handle clicking on letters
//the letters are dynamically appended into the doc not relly found into the dom
let wrongAttempts = 0;  //global out of click 34an lw gwa el fun htfdl kol mra tzwd 3la el 0 w kol mra = 1
let rightAttempts = 0
let spanLetter = document.querySelectorAll(".letters-guess span");
document.addEventListener("click", (e) => {

  let state = false;
  
  if (e.target.className == "letters-box") {
    e.target.classList.add("clicked");
    let clickedletter = e.target.innerHTML;
    arrayOfValue.forEach((wordletter, index) => {
      if (wordletter == clickedletter) {
        state = true;
        spanLetter.forEach((span, indexspan) => {
          if (indexspan == index) {
            span.innerHTML = wordletter;

          }
        });
      }
    });
    if (state == false) {
    wrongAttempts ++;
      document.querySelector(".game-draw").classList.add(`wrong-${wrongAttempts}`);
      document.getElementById("fail").play()
      if(wrongAttempts == 8){
        contain.classList.add("finished")
        endGame(loser)
      }
    }else if(state == true){
      rightAttempts ++;
      document.getElementById("success").play()
      if(rightAttempts == arrayOfValue.length){
        endGame(winner)
      }
    }
    }
  }
);
let winner ='congratulations';
let loser = 'game over The word is'
 function endGame(text){
   let div = document.createElement('div')
   let divText = document.createTextNode(text ,rondomCategoryElement)
   div.className = "alert"
   div.appendChild(divText)

   document.body.appendChild(div)
 }