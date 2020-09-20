const input = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');
const error = document.getElementById('error');

btn.addEventListener('click', () => {
    if(input.value === ""){
        error.classList.add('show');
    } else {
        error.classList.remove('show');
        output.classList.add('show');
        output.textContent = input.value.toUpperCase();
        input.value = '';
    }
});