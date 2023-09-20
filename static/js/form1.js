'use strict';

const form = document.getElementById('form-1');

const button = document.getElementById('btn-1');

const data = {};
    button.addEventListener('click', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const elements = form.elements;
        for(const element of elements){
            const key = element.name;
            const val = formData.get(key);
            if(key){
                data[key] = val;
            }
        }
        const dataToServer = JSON.stringify(data);
        fetch('/form',{
            method:'POST',
            body: dataToServer,
        }).then((answer) => answer.json())
            .then(data => console.log(data))
    })


