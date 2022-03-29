// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

// vamos a decir que esta función es asíncrona
// "Oye JAvaScript" sigue ejecutando cosas que requiera el usuario sin bloquear el código

button.addEventListener("click", obtenerChisteClick);

console.log("He pedido un chiste!");
console.log("hola hola!");

function obtenerChisteClick() {
    obtenerChisteAPI(updateDOM);
}

// Le pasamos directamente un string con el chiste
function updateDOM(joke) {
    jokeDIV.textContent = joke;
}

function mostrarConsola(joke) {
    console.log(joke);
}


async function obtenerChisteAPI(cb) {

    // 1. Traernos el chiste de la máquina https://api.chucknorris.io/jokes/random
    // 2. Parsear los datos que recibimos (formato JSON) a un tipo de datos que entienda JavaScript (objeto)
    // 3. jokeDiv.textContent tenemos que actualizar con la propiedad "value" del objeto que vamos a recibir

    let response = await fetch("https://api.chucknorris.io/jokes/random"); // Petición GET a "https://api.chucknorris.io/jokes/random"

    console.log(response);

    let chiste = await response.json(); // Convertir un JSON a un Objeto (o array de objetos)

    // jokeDIV.textContent = chiste.value; // propiedad .value de dicho objeto, tenemos el 'chiste' de Chuck Norris

    // Le pasamos a la función de callback el chiste
    cb(chiste.value);

}