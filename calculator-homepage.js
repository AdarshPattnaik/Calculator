let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            if(string.includes('√') == true){
                string = string.substring(string.indexOf('√')+1, string.length+1);
                document.querySelector('.input').value = Math.sqrt(string);
            }
            else{
                evaluate();
            }
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == '⧏') {
            backspace();
            string = string.slice(0, -1);
        }
        else {
            console.log(e.target);
            if (e.target.innerHTML == 'x') {
                string = string + '*';
                document.querySelector('.input').value = string;
            }
            else if (e.target.innerHTML == '÷') {
                string = string + '/';
                document.querySelector('.input').value = string;
            }
            else {
                string = string + e.target.innerHTML;
                document.querySelector('.input').value = string;
            }
        }
    });
});

function evaluate() {
    let s = document.querySelector('.input').value;
    document.querySelector('.input').value = eval(s);
}

function backspace() {
    let s = document.querySelector('.input').value;
    document.querySelector('.input').value = s.slice(0, -1);
}