// Ejemplo de reduce

mascotas = [
    {nombre: "Pelusa", edad: 12, tipo: "gato"},
    {nombre: "Puchini", edad: 12, tipo: "perro"},
    {nombre: "Pulga", edad: 10, tipo: "perro"},
    {nombre: "Chanchito_Feliz", edad: 3, tipo: "perro"}
];

const indexed = mascotas.reduce((acumulado, elemento) => ({
    ...acumulado,
    [elemento.nombre]: elemento,
}), {});

console.log(indexed)

// Resultado en indexed:
//  {
//    Pelusa: { nombre: 'Pelusa', edad: 12, tipo: 'gato' },
//    Puchini: { nombre: 'Puchini', edad: 12, tipo: 'perro' },
//    Pulga: { nombre: 'Pulga', edad: 10, tipo: 'perro' },
//    Chanchito_Feliz: { nombre: 'Chanchito_Feliz', edad: 3, tipo: 'perro' }
//  }
