// String literals
const background = '#303030';
const color = 'white';
const isAuthorized = false;

const button = document.createElement('button');
button.innerText = 'Click me';
button.style = `background: ${isAuthorized ? 'blue' : background}; color: ${isAuthorized ? white : color};`;

button.addEventListener('click', () => {
    if(isAuthorized) {
       return alert('Esta autorizado!!');
    }
    alert('No esta autorizado');
});

document.body.append(button);