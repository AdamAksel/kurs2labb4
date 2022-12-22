// 1. Med hjälp av JavaScript –hur kan du ändra så att när du trycker på knappen
// (button) ändras texten på knappen från OFF till ON?

let buttonId = document.getElementById('button')
buttonId.addEventListener('click', buttonFunction)
function buttonFunction() {
  if (buttonId.innerHTML === 'OFF') {
    buttonId.innerHTML = 'ON'
  } else {
    buttonId.innerHTML = 'OFF'
  }
}

// 2. Med hjälp av JavaScript –gör så att din div med id ”redCircle”
// tas bort helt när man klickar på knappen.

let button1Id = document.getElementById('button1')
button1Id.addEventListener('click', redCircleRemover)
function redCircleRemover() {
  if (document.getElementById('redCircle')) {
    document.getElementById('redCircle').remove()
  }
}

/*
3. Med hjälp av JavaScript –skapa två knappar (buttons) en medtexten DÖLJ och en
med texten VISA. Gör så attinnehållet i h1-taggen visas när du trycker på
VISA och döljs när du trycker på DÖLJ
*/

let h1title = document.getElementById('title')
let btn1 = document.createElement('button')
let btn2 = document.createElement('button')
btn1.innerHTML = 'VISA'
btn2.innerHTML = 'DÖLJ'
let classSelect = document.getElementsByClassName('givet')
btn1.addEventListener('click', btn1function)
btn2.addEventListener('click', btn2function)
function btn1function() {
  h1title.style.display = 'block'
}
function btn2function() {
  h1title.style.display = 'none'
}
classSelect[2].appendChild(btn1)
classSelect[2].appendChild(btn2)

/*
4. Medhjälp av JavaScript –när användaren börjar skriva i input-fältet
–gör så att en alert öppnas när användaren trycker ned en tangent
(inne i inputfältet). Skriv valfri text till användarensom alert message. 
*/

let inputTag = document.getElementsByTagName('input')
inputTag[0].addEventListener('keydown', alertOnChange)
function alertOnChange() {
  alert('You started to write something!')
}

/*
5. Med hjälp av JavaScript –gör så att varje gång användaren trycker
på knappen returneras ett slumpmässigt nummer mellan 0-10. 
*/

//jag kunde inte skriva javascripten i js filen så jag använde script tags i html
