let newEl = document.createElement('button');

let text = document.createTextNode('Click');

newEl.appendChild(text);

newEl.setAttribute('style',
    'display: block; margin: 10px auto; padding: 5px 10px; background: coral; color: #fff;'
);
console.log(newEl);

let form = document.getElementById('add');

form.insertBefore(newEl, form.children[0]);

newEl.parentElement.removeChild(newEl);