let ul = document.querySelector('ul');

// ******** add item
document.getElementById('add-btn').addEventListener('click',
    function(e) {
        e.preventDefault();

        let addInput = document.getElementById('add-input');

        if(addInput.value !== '') {
            let li = document.createElement('li'),
                firstPar = document.createElement('p'),
                secondPar = document.createElement('p'),
                firstIcon = document.createElement('i'),
                secondIcon = document.createElement('i'),
                input = document.createElement('input');
    
            firstIcon.className = "fa fa-pencil-square-o";
            secondIcon.className = "fa fa-times";
            input.className = "edit-note";
            input.setAttribute('type', 'text');
    
            firstPar.textContent = addInput.value;
    
            secondPar.appendChild(firstIcon);
            secondPar.appendChild(secondIcon);
            li.appendChild(firstPar);
            li.appendChild(secondPar);
            li.appendChild(input);
            ul.appendChild(li);
            addInput.value = '';
        };
    }
);

// ********* edit and delete items
ul.addEventListener('click', function(e) {
    if(e.target.classList[1] === "fa-pencil-square-o") {
        let parentPar = e.target.parentNode;
        parentPar.style.display = 'none';

        let note = parentPar.previousElementSibling;
        let input = parentPar.nextElementSibling;

        input.style.display = 'block';
        input.value = note.textContent;

        input.addEventListener('keypress', function(e) {
            if(e.keyCode === 13) {
                if(input.value !== '') {
                    note.textContent = input.value;
                    parentPar.style.display = 'block';
                    input.style.display = 'none';
                } else {
                    let li = input.parentNode;
                    console.log(li);
                    li.parentNode.removeChild(li);
                }
            } 
        }, false);
    } else if(e.target.classList[1] === "fa-times") {
        let list = e.target.parentNode.parentNode;
        list.parentNode.removeChild(list);
    }
});

// ********* hide items
let hideItem = document.getElementById('hide');

hideItem.addEventListener('click', function() {
    let label = document.querySelector('label');

    if(hideItem.checked) {
        label.textContent = 'Unhide notes';
        ul.style.display = 'none';
    } else {
        ul.style.display = 'block';
        label.textContent = 'Hide notes';
    }
});