var score = 0;
var nScore = document.querySelector('.score');
var text = document.querySelectorAll(".text");
const next = document.querySelector('button');


var q1 = document.querySelector('.q-1');
var q2 = document.querySelector('.q-2');
var q3 = document.querySelector('.q-3');
var q4 = document.querySelector('.q-4');
var q5 = document.querySelector('.q-5');
var q6 = document.querySelector('.q-6');


var final = document.querySelector(".finalScore")
var h2 = document.querySelector("h2")
var h1 = document.querySelector("h1")
var cuida = document.querySelector('.pfinal')







var questionActual = 1;



function verificacao(n) {
    var select = document.getElementById(n);
    var correct = document.querySelector('.correct')
    var item = document.querySelectorAll(".select")


    select.style.background = 'red'
    select.style.color = 'white'
    correct.style.background = 'green'
    correct.style.color = 'white'

    if (select === correct) {
        score += 1
        nScore.innerHTML = 'Score:  ' + score
        text.innerHTML = 'Your answer is CORRECT'
    } else {
        text.innerHTML = 'Your answer is WRONG'
    }
    correct.removeAttribute('onclick')

    h1.innerHTML = `${score}`;
    media = (score/6*100).toFixed(2)
    	cuida.innerHTML = `Your performance  is: ${media}%`;
}

function nxt() {
    if (questionActual === 1) {
        q1.remove()
        questionActual += 1
        q2.style.display = 'block'
    } else if (questionActual === 2) {
        q2.remove()
        questionActual += 1
        q3.style.display = 'block'

    } else if (questionActual === 3) {
        q3.remove()
        questionActual += 1
        q4.style.display = 'block'
    } else if (questionActual === 4) {
        q4.remove()
        questionActual += 1
        q5.style.display = 'block'
    } else if (questionActual === 5) {
        q5.remove()
        questionActual += 1
        q6.style.display = 'block'
    } else if (questionActual === 6) {
        q6.remove()
        questionActual += 1
        final.style.display = 'flex'
        next.remove()
        nScore.remove()
    } 
} 

