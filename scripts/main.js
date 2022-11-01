var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/1.2.gif') {
      myImage.setAttribute ('src','images/1.4.jpg');
    } else {
      myImage.setAttribute ('src','images/1.2.gif');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Добро пожаловать в мир доты, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Добро пожаловать в мир доты, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }