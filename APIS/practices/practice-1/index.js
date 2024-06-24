const main_container = document.getElementById('container');

const API_URL = 'https://rickandmortyapi.com/api';

const HTMLresponse = document.querySelector('#container');

fetch(`${API_URL}/character`)
.then((response) => response.json())
.then((characters) => {
    const tpl = characters.results.map((character) =>`
    <li>
    nombre: ${character.name}
    <br>
    status: ${character.status}
    <br>
    especie: ${character.species}
    <br>
    <img src="${character.image}"/>
    </li>
    `);
    contenedor = document.createElement('div');
    contenedor.innerHTML = `
    <ul>${tpl}</ul>
    `
    HTMLresponse.appendChild(contenedor);
    ;
})

for (i = 2; i<=42; i++){
    fetch(`${API_URL}/character?page=${i}`)
.then((response) => response.json())
.then((characters) => {
    const tpl = characters.results.map((character) =>`
    <li>
    nombre: ${character.name}
    <br>
    status: ${character.status}
    <br>
    especie: ${character.species}
    <br>
    <img src="${character.image}"/>
    </li>
    `);
    contenedor = document.createElement('div');
    contenedor.innerHTML = `
    <ul>${tpl}</ul>
    `
    HTMLresponse.appendChild(contenedor);
    ;
})

}
