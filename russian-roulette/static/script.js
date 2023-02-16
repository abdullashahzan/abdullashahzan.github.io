const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const msg = document.querySelector('.lead')
const main = document.querySelector('main')
const allbtn = document.querySelector('.btn')
const restartbutton = document.querySelector('.rbtn')
var numbers = [1, 2, 3, 4, 5, 6]
const score = document.querySelector('.scores')
var scores = 0

function check(n) {
    var roullete = Math.floor(Math.random()*numbers.length);
    var roulletenumber = numbers[roullete];
    if (n == roulletenumber) {
        msg.innerHTML = "You chose the wrong number... You died!";
        main.style.backgroundColor = "gray"
        main.style.color = "white"
        restartbutton.style.backgroundColor = "white"
        restartbutton.style.color = "black"
        restartbutton.style.border = "white"
        document.querySelector(".lostgif").style.display = 'block'
        restart()
    } else {
        scores += 100
        score.innerHTML = scores;
        if (roulletenumber == 1) {
            var index = numbers.indexOf(1);
            numbers.splice(index,1);
            btn1.disabled = true;
            btn1.style.background = 'black'
            btn1.style.border = 'black'
            btn1.innerHTML = '💀'
            btn1.classList.add('animate')
            msg.innerHTML = "Number 1 was killed!";
        }
        if (roulletenumber == 2) {
            var index = numbers.indexOf(2);
            numbers.splice(index,1);
            btn2.disabled = true;
            btn2.style.background = 'black'
            btn2.style.border = 'black'
            btn2.innerHTML = '💀'
            btn2.classList.add('animate')
            msg.innerHTML = "Number 2 was killed";
        }
        if (roulletenumber == 3) {
            var index = numbers.indexOf(3);
            numbers.splice(index,1);
            btn3.disabled = true;
            btn3.style.background = 'black'
            btn3.style.border = 'black'
            btn3.innerHTML = '💀'
            btn3.classList.add('animate')
            msg.innerHTML = "Number 3 was killed";
        }
        if (roulletenumber == 4) {
            var index = numbers.indexOf(4);
            numbers.splice(index,1);
            btn4.disabled = true;
            btn4.style.background = 'black'
            btn4.style.border = 'black'
            btn4.innerHTML = '💀'
            btn4.classList.add('animate')
            msg.innerHTML = "Number 4 was killed";
        }
        if (roulletenumber == 5) {
            var index = numbers.indexOf(5);
            numbers.splice(index,1);
            btn5.disabled = true;
            btn5.style.background = 'black'
            btn5.style.border = 'black'
            btn5.innerHTML = '💀'
            btn5.classList.add('animate')
            msg.innerHTML = "Number 5 was killed";
        }
        if (roulletenumber == 6) {
            var index = numbers.indexOf(6);
            numbers.splice(index,1);
            btn6.disabled = true;
            btn6.style.background = 'black'
            btn6.style.border = 'black'
            btn6.innerHTML = '💀'
            btn6.classList.add('animate')
            msg.innerHTML = "Number 6 was killed";
        }
    } if (numbers.length === 1){
        msg.innerHTML = "Congratulations you won!!";
        main.style.background = "#d4af37"
        main.style.color = "white"
        restartbutton.style.backgroundColor = "white"
        restartbutton.style.color = "black"
        restartbutton.style.border = "white"
        restartbutton.innerHTML = "Play again"
        document.querySelector(".gifdiv").style.display = "block"
        restart()
    }
        
}

function restart(){
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
}
