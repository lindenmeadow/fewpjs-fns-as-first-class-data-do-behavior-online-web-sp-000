/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(d) {
  d = new Date();
  const h = d.getHours();
  if (h < 12) {
    str = "Good Morning";
  }
  if (h < 17) {
    str = "Good Afternoon";
  } else {
    str = "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  document.getElementById('greeting').innerHTML = message;
}
