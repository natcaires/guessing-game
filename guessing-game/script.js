const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() *10)
let attempts = 1

console.log(randomNumber)

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || inputNumber.value == "") {
    alert("Only number between 0 and 10 are accepted!")
    attempts = 0;
  } else if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()

    screen2
      .querySelector("h2")
      .innerText = `Acertou em ${attempts} tentativas!`
  }

  attempts++ 
  inputNumber.value = ""
  
}

function handleResetClick() {
  toggleScreen()

  randomNumber = Math.round(Math.random() *10)
  console.log(randomNumber)
  attempts = 1
}

function resetWithEnterKey(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetWithEnterKey);