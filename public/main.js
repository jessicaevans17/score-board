let counter1 = 0
let counter2 = 0

const pageStart = () => {
  // set the text of the team score p tags to to the value of each counter
  document.querySelector(".team-1-score").textContent = counter1
  document.querySelector(".team-2-score").textContent = counter2
}

const updateTeamOneName = () => {
  console.log ("update name")
  // get the value of the text box
  const newTeamOneName = document.querySelector(".team-1-input").value
  document.querySelector(".team-1-name").textContent = newTeamOneName
  document.querySelector(".team-1-input").value = ""
}
const addOneToTeamOneCount = () => {
  console.log ("add 1 to a counter")
  // get current value of the counter
  // add 1 to the counter
  counter1 = counter1 + 1
  console.log(counter1)
  // update the HTML
  // DOM, find the p tag and update the HTML
  document.querySelector(".team-1-score").textContent = counter1
}

const subtractOneFromTeamOneCount = () => {
  console.log ("subtract 1 to a counter")
  counter1 = counter1 - 1
  document.querySelector(".team-1-score").textContent = counter1
}

const updateTeamTwoName = () => {
  const newTeamTwoName = document.querySelector(".team-2-input").value
  document.querySelector(".team-2-name").textContent = newTeamTwoName
  document.querySelector(".team-2-input").value = ""
}
const addOneToTeamTwoCount = () => {
  console.log ("add 1 to a counter")
  // get current value of the counter
  // add 1 to the counter
  counter2 = counter2 + 1
  console.log(counter1)
  // update the HTML
  // DOM, find the p tag and update the HTML
  document.querySelector(".team-2-score").textContent = counter2
}

const subtractOneFromTeamTwoCount = () => {
  console.log ("subtract 1 to a counter")
  counter2 = counter2 - 1
  document.querySelector(".team-2-score").textContent = counter2
}

document
  .querySelector(".team-1-input")
  .addEventListener("blur", updateTeamOneName)

document
  .querySelector (".team-1-add-1-button")
  .addEventListener ("click", addOneToTeamOneCount)

document
  .querySelector (".team-1-subtract-1-button")
  .addEventListener ("click", subtractOneFromTeamOneCount)

document
  .querySelector (".team-2-input")
  .addEventListener ("blur", updateTeamTwoName)

document
  .querySelector (".team-2-add-1-button")
  .addEventListener ("click", addOneToTeamTwoCount)

document
  .querySelector (".team-2-subtract-1-button")
  .addEventListener ("click", subtractOneFromTeamTwoCount)

document.addEventListener('DOMContentLoaded', pageStart)
