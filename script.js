var score = 0;
var nScore = document.querySelector('.score');
var text = document.querySelector('.text');
const next = document.querySelector('button');
var circle = document.querySelector(".circle")
var body = document.body
var container = document.querySelector(".container")
var claro = document.querySelector(".fa-sun")
var escuro = document.querySelector("#escuro")
var back = document.querySelector(".toggle")

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

    select.style.background = 'red'
    select.style.color = 'white'
    correct.style.background = 'green'
    correct.style.color = 'white'
    correct.style.border = '1px solid green'

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

    text.innerHTML = ''
} 

function brilho() {
    var stg = document.querySelector(".stg")

    circle.classList.toggle('light')
    circle.classList.toggle('dark')


    if (circle.classList.contains('dark')) {
        container.style.background = 'black';
        body.style.background = '#150889';
        stg.style.background = 'black';
        stg.style.color = 'white';
        container.style.color = 'white';
        next.style.border = 'nonne'
        claro.style.display = 'none'
        escuro.style.display = 'block'
        circle.style.left = '21px'
    } else {
        container.style.background = 'white';
        body.style.background = '#150889';
        container.style.color = '';
        escuro.style.display = 'none'
        claro.style.display = 'block'
        circle.style.left = '2px'
        next.style.border = '1px solid #150889'
        stg.style.background = 'white';
        stg.style.color = '#150889';
    }
}

function font() {
    var body = document.body
    var fonts = document.querySelector(".font")
    var nameFont = document.querySelector(".type-font")

    var fontBody = window.getComputedStyle(body).fontFamily;

    console.log(fontBody)

    if (fontBody === 'Outfit') {
        body.style.fontFamily = 'Montserrat';
        nameFont.innerHTML = 'Montserrat';
    } else if (fontBody === 'Montserrat') { 
        body.style.fontFamily = 'Poppins';
        nameFont.innerHTML = 'Poppins';
    } else if (fontBody === 'Poppins') { 
        body.style.fontFamily = 'Roboto';
        nameFont.innerHTML = 'Roboto';
    } else if (fontBody === 'Roboto') { 
        body.style.fontFamily = 'Raleway';
        nameFont.innerHTML = 'Raleway';
    } else if (fontBody === 'Raleway') { 
        body.style.fontFamily = 'Nunito Sans';
        nameFont.innerHTML = 'Nunito';
    } else {
        body.style.fontFamily = 'Outfit';
        nameFont.innerHTML = 'Outfit';
    }
}  