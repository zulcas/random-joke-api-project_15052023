// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');

//Listener
button.addEventListener('click', async function(){
    //1) Hacer petición GET a la API de los chistes a traves método fetch
    const response = await fetch('https://api.chucknorris.io/jokes/random'); //await espera a que se resuelva la llamada antes de continuar

    //2) Convertir JSON (== string muy largo) a algo que Javascript entiende
    const data = await response.json();//parsea el dato que devuelve el get

    //3) Modificar DOM para mostrar chiste a usuario
    jokeDIV.textContent= data.value;
})
