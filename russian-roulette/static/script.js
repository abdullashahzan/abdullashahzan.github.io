const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const btn3 = document.querySelector('.btn3')
const btn4 = document.querySelector('.btn4')
const btn5 = document.querySelector('.btn5')
const btn6 = document.querySelector('.btn6')
const msg = document.querySelector('.lead')
const main = document.querySelector('main')
var numbers = [1, 2, 3, 4, 5, 6]
const score = document.querySelector('.scores')
var scores = 0

function check(n) {
    var roullete = Math.floor(Math.random()*numbers.length);
    var roulletenumber = numbers[roullete];
    if (n == roulletenumber) {
        msg.innerHTML = "You were killed!";
        restart()
    } else {
        scores += 100
        score.innerHTML = scores;
        if (roulletenumber == 1) {
            var index = numbers.indexOf(1);
            numbers.splice(index,1);
            btn1.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
        if (roulletenumber == 2) {
            var index = numbers.indexOf(2);
            numbers.splice(index,1);
            btn2.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
        if (roulletenumber == 3) {
            var index = numbers.indexOf(3);
            numbers.splice(index,1);
            btn3.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
        if (roulletenumber == 4) {
            var index = numbers.indexOf(4);
            numbers.splice(index,1);
            btn4.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
        if (roulletenumber == 5) {
            var index = numbers.indexOf(5);
            numbers.splice(index,1);
            btn5.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
        if (roulletenumber == 6) {
            var index = numbers.indexOf(6);
            numbers.splice(index,1);
            btn6.disabled = true;
            msg.innerHTML = "You survived. Choose again!";
        }
    } if (numbers.length === 1){
        msg.innerHTML = "Congratulations you won!!";
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
