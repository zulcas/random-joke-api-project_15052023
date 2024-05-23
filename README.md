# Chistes random sobre Chuck Norris

Tenemos acceso a una API tal que, cada vez que la llamamos, nos devuelve un chiste aleatorio sobre Chuck Norris.
Aquí tienes una [Demo](https://js-beginners.github.io/random-joke-api-project/).

Puedes probar simplemente invoncando a la API desde el [navegador](https://api.chucknorris.io/jokes/random)
URL de la página oficial de esta API [enlace](https://api.chucknorris.io/)

Fíjate en el formato que devuelve los datos cada vez que la invocas. Para ver mejor la estructura de los datos, puedes inspeccionar las llamadas que hace el script del 
lado cliente al servidor.
![](inspector.png)

## Requisitos

1. Preguntas de autoevaluación:
   1. ¿Cuál es la URL exacta que me permite obtener un chiste?
   2. ¿Qué tipo de petición HTTP debemos realizar para obtener la información? ¿GET o POST?
   3. ¿Que tipo de dato JavaScript devuelve la respuesta de la API?
   4. ¿Cuál es la propiedad de este objeto que contiene el texto del chiste?
2. Implementa el mismo comportamiento de la demo, tal que cada vez que hagas clic en el botón __Get Joke!__ recupere un chiste aleatorio de la API https://api.chucknorris.io/jokes/random y lo muestre en el elemento del DOM adecuado

## Bonus

1. Crea un selector de manera que puedas escoger la categoría del chiste. Revisa la documentación oficial y descubrirás que pueden invocar a la API con un parámetro para que te de un _chiste_ de una categoría en concreto. Haz [clic aquí](https://omiras.github.io/random-joke-api-project/) para ver una demo, pero revisa también como tienes que conformar la URL de la petición para obtener el chiste en función de la categoría.

![chueck](https://github.com/omiras/random-joke-api-project/assets/3286458/983c0774-4a74-48e8-9f91-c10ac2942349)


## Otras soluciones

[Claudia Ballano](https://github.com/claudiaballano/random-joke-api-project)
