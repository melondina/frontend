const t = setInterval(move, 20);

const box = document.getElementById('box');
let pos = 0;
let flag = true;

function move() {
    flag ? pos++ : pos--;
    if (pos <= 0 || pos >= 150) {
        flag = !flag;
    }
    box.style.left = pos + 'px';
    box.style.top = pos + 'px';
}






