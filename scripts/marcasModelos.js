// la siguiente linea es para que funcione el fetch, porque si no hay refererencia al DOM fetch no funciona
const header = document.querySelector('header');

// en arreglo marcas[] se guardan las marcas de autos
let marcas = [];

async function getMarcas () {
    const URL = "./json/marcasModelos.json"
    const respuesta = await fetch(URL)
    const json = await respuesta.json()
    
    // extrae las marcas y los añade al arreglo marcas[]
    // "autos" : es la llave principal en json (contiene un arreglo de objetos)
    // "marca" : representa la marca de un auto
    await json.autos.forEach(element => marcas.push(element.marca));

    return marcas
};

// en arreglo modelos[] se guarda los modelos de una sola marca de auto, según parámetro.
let modelos = [];

async function getModelos (marca) {
    const URL = "./json/marcasModelos.json"
    const respuesta = await fetch(URL)
    const json = await respuesta.json()
    
    // busca la marca de auto solicitada, una vez encontrado 
    // recoge el arreglo "modelos" que contiene los modelos de una marca
    await json.autos.find(element => {
        if (element.marca.toLowerCase() === marca.toLowerCase()) modelos = element.modelos
    })

    return modelos
};

// las lineas siguientes son para fines de TESTEO de las 2 funciones anteriores
console.log("Inicio: Aqui empieza");

// la función sin nombre esta entre parentesis, es para indicarle al java script
// se ejecute de inmediato:

(async function() {
    try {
        // TEST: obtiene las marcas de autos
        await getMarcas()
        // TEST: obtiene los modelos de una marca de auto
        await getModelos("nissan") 
    }
    catch (error) {
        console.log(`Error: ${error}`)
    }
})();

// una vez finalizado asyncronamente las funciones de marcas y modelos, se muestra sus resultados:
// se simula asyncronía y para verificar la captura del arreglo de marcas de autos y/o modelos de una marca
setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getMarcas(): ", marcas)}, 2000);
setTimeout(function() {console.log("Muestra arreglo de marcas fuera de la función getMarcas(): ", modelos)}, 2000);
setTimeout(function() {console.log("Muestra marca fuera de la función getMarcas(): ", marcas[0])}, 2000);
setTimeout(function() {console.log("Muestra marca fuera de la función getMarcas(): ", marcas[1])}, 2000);
setTimeout(function() {console.log("Final: Aqui termina")}, 2000);

