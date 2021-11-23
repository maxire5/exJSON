// source: https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/JSON
// -------------------------------------------------------------------------------

// va la archivo Html y obtiene el Header y la section
const header = document.querySelector('header');
const section = document.querySelector('section');

// se debe almacenar la URL del JSON que se quiere recuperar en una variable.
// const requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const requestURL = "./json/data.json";

// crear una nueva instancia de objeto de solicitud desde el constructorXMLHttpRequest,
// utilizando la palabra clave new.
const request = new XMLHttpRequest();

// abrir una nueva solicitud utilizando el método open(), 2 parámetros:
// (1) El método HTTP a usar cuando se hace una solicitud en red. En este caso GET es adecuado,
// dado que sólo se estan recuperando algunos datos simples.
// (2) La URL a la que se realiza la solicitud — esta es la URL del archivo que se almacenó antes.
request.open('GET', requestURL);

// establecemos el responseType a JSON, de esta forma ese XHR sabe que el servidor
// estará retornando JSON y que esto debería ser convertido en segundo plano en un objeto JavaScript.
// Luego se envía la solicitud con el método send():
request.responseType = 'json';
request.send();

// La última parte comprende la espera por la respuesta a retornar desde el servidor y 
// Se está almacenando la respuesta a la solicitud (disponible en la propiedad response) en la variable superHeroes;
// esta variable ahora contendrá el objeto JavaScript basado en el JSON.
// Luego se pasa el objeto como argumento a dos funciones — la primera llenará el <header>,
// la segunda creará una tarjeta de información para cada héroe en el equipo y la insertará en <section>.
// Onload es un evento de XMLHttpRequest que se dispara cuando la respuesta ha sido retornada de forma exitosa.
request.onload = function() {
    const superHeroes = request.response; // cogemos la cadena de response
    //const superHeroes = JSON.parse(superHeroesText); // la convertimos a objeto
    populateHeader(superHeroes);
    showHeroes(superHeroes);
};

// function: populateHeader: Añadae los elementos en la cabecera en el archivo Html.
function populateHeader(jsonObj) {
    const myH1 = document.createElement('h1');
    myH1.textContent = jsonObj['squadName'];
    header.appendChild(myH1);
  
    const myPara = document.createElement('p');
    myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
    header.appendChild(myPara);
};

// function: showHeroes: Añadae los elementos en el articulo y section en el archivo Html
function showHeroes(jsonObj) {
    const heroes = jsonObj['members'];
  
    for (var i = 0; i < heroes.length; i++) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myList = document.createElement('ul');
  
      myH2.textContent = heroes[i].name;
      myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
      myPara2.textContent = 'Age: ' + heroes[i].age;
      myPara3.textContent = 'Superpowers:';
  
      const superPowers = heroes[i].powers;
      for (var j = 0; j < superPowers.length; j++) {
        const listItem = document.createElement('li');
        listItem.textContent = superPowers[j];
        myList.appendChild(listItem);
      }
  
      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myList);
  
      section.appendChild(myArticle);
    }
};

