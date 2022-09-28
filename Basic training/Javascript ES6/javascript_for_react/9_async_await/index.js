// Async await
// Sincronia
let url = 'https://jsonplaceholder.typicode.com/posts';
const ul = document.createElement('ul');

fetch(url)
    .then((response) => {
        console.log("Finalizo la carga de datos...");
        return response.json();
    }).then((date) => {
        console.log(date);
        date.forEach((post) => {
            const li = document.createElement('li');
            li.innerText = post.title;
            ul.append(li);
        });
        document.body.append(ul);
    });

console.log('Parte 2');

// Esto de abajo es lo mismo de lo de arriba

// Asincrono
async function loadData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    date.forEach((post) => {
        const li = document.createElement('li');
        li.innerText = post.title;
        ul.append(li);
    });
    document.body.append(ul);
}
loadData();