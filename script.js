var startButton = document.querySelector("#start-button"); //'Document' refers to the HTML. querySelector is a function that looks for something that matches the
//thing you put in the parenthesis (the argument). We put in the string which basically means 'ID start button.' IDs are '#', classes are '.'.
startButton.addEventListener("click", buttonClick); //this function takes two arguments. The first is the event it's listening for, and the second is the HTML element it's listening to.

//short hand option to condense the two lines abovethis into one line of code
//document.querySelector("#start-button").addEventListener("click", buttonClick);

var textNumber = 1;

function buttonClick(event) {
  event.preventDefault();
  var inputElement = document.querySelector("#user-input");
  var elementsDiv = document.querySelector("#elements-div");

  //create the new HTML elements
  var newText = document.createElement("p");
  var newButton = document.createElement("button");

  //set an event listener on the new button
//   newButton.addEventListener("click", deleteP(textNumber));

  //set an id and text for the new p element
  newText.setAttribute("id", `p-tag-${textNumber}`);
  newText.textContent = inputElement.value; //this is the text document for p, but like the p in the script not in html

  //APPEND THE CHILD
  elementsDiv.appendChild(newText);

  //   <div>
  //     <p>I was already here!</p>
  //     <p>I'm the appended child!</p>
  //   </div>

  //add one so the next p element will have a different id
  //   textNumber = textNumber + 1;
}

// function deleteP(textNumber) {
// //   event.preventDefault();
//   var deleteText = document.querySelector(`#p-tag-${textNumber}`);
//   var elementsDiv = document.querySelector("#elements-div");
//   elementsDiv.removeChild(deleteText)
// }
