let btn = document.getElementById('add-btn');
let input = document.getElementById('add-input');

btn.addEventListener('click', function(e) {
    e.preventDefault();

    input.setAttribute('type', 'submit');
    input.setAttribute('value', input.value);
});