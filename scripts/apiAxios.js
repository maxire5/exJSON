const button = document.querySelector('button');

button.addEventListener('click', () => {

    axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users"
    }).then(res => {
        const list = document.getElementById('list')
        const fragment = document.createDocumentFragment()
        for (const userInfo of res.data) {
            const listItem = document.createElement("li")
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.appendChild(listItem)
        }
        list.appendChild(fragment)
    }).catch(err => console.log(err))
})

/*
import axios from "axios";
*/

let marcas = []
let modelos = []
let ubicaciones = []
let categorias = []

const url_db = "./json/db.json"

async function getMarcas () {

    try {
        // aplica axios para traer data de archivo json:
        const response = await axios(url_db);

        // Extrae solo la entidad: marcas
        const original = await response.data.marcas;

        // Copia o clona arreglo de entidad de marcas de auto:
        const copia = await original.slice();

        // sortea alfabeticamente las marcas de autos desde arreglo "copia":
        const resultado = await copia.sort((x,y) => x.marca.localeCompare(y.marca));

        // resultado es un arreglo de objetos, donde cada objeto tiene:
        // (1) la marca, (2) el arreglo de modelos y (3) el id de la respectiva marca.
        // ejemplo de uso: para llenar el "combo de marcas" 
        // se debe extraer desde el arreglo de objetos que devuelve esta función

        // solo para mostrar en la console lo asigna a un arreglo global: "marcas"
        marcas = resultado

        return resultado;
    }

    catch (error) {
        console.log(error)
    }
};

async function getModelos (idMarca, marcas) {
    // No es necesario leer nuevamente el json, getModelos depende del arreglo obtenido de getMarcas()
    // recibe como parametros del id de la marca que selecciona el usuario y el arreglo de las marcas

    try {
        // debe obtener un arreglo con un solo objeto de marcas
        const filtrado = await marcas.filter(elemento => elemento.id === idMarca)

        let resultado = []

        // ordenamiento alfabetico de los modelos
        if (filtrado.length === 1) resultado = await filtrado[0].modelos.sort();   

        // solo para mostrar en la console lo asigna a un arreglo global: "modelos"
        modelos = resultado;

        // se entrega un arreglo de los modelos de una marca de auto, ordenado alfabeticamente
        return resultado;
    }

    catch (error) {
        console.log(error)
    }
}

async function getUbicaciones () {

    try {
        // aplica axios para traer data de archivo json:
        const response = await axios(url_db);

        // Extrae solo la entidad: regiones
        const original = await response.data.regiones;

        // Copia o clona arreglo de entidad de regiones:
        const copia = await original.slice();

        // sortea alfabeticamente las regiones desde arreglo "copia":
        const resultado = await copia.sort((x,y) => x.region.localeCompare(y.region));

        // resultado es un arreglo de objetos, donde cada objeto tiene:
        // (1) la region, (2) el id de la respectiva region.
        // ejemplo de uso: para llenar el "combo de ubicaciones" 
        // se debe extraer desde el arreglo de objetos que devuelve esta función

        // solo para mostrar en la console lo asigna a un arreglo global: "ubicaciones"
        ubicaciones = resultado

        return resultado;
    }

    catch (error) {
        console.log(error)
    }
};

async function getCategorias () {

    try {
        // aplica axios para traer data de archivo json:
        const response = await axios(url_db);

        // Extrae solo la entidad: categorias
        const original = await response.data.categorias;

        // resultado es un arreglo de objetos, donde cada objeto tiene:
        // (1) la categoria, (2) y su id respectivo.
        // ejemplo de uso: para llenar el "combo de categorias" 
        // se debe extraer desde el arreglo de objetos que devuelve esta función

        // solo para mostrar en la console lo asigna a un arreglo global: "categorias"
        categorias = original

        return original;
    }

    catch (error) {
        console.log(error)
    }
};

/////////////////////////////////////////////////////////
// TEST: Ver por la Consola del navegador los resultados:
(async function() {
    try {
        // TEST: obtiene las marcas de autos
        await getMarcas(url_db)
        // TEST: obtiene los modelos de una marca de auto
        await getModelos(4, marcas) 
        // TEST: obtiene las ubicaciones (entidad: regiones)
        await getUbicaciones() 
        // TEST: obtiene las categorias
        await getCategorias() 
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
})();

setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getMarcas(): ", marcas)}, 2000);
setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getModelos(): ", modelos)}, 2000);
setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getUbicaciones(): ", ubicaciones)}, 2000);
setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getCategorias(): ", categorias)}, 2000);

