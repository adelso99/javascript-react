//var generateName = require('sillyname');

import generateName from "sillyname";
import superheroes from 'superheroes';


var sillyName = generateName();
const superHeroes = superheroes.random();

console.log(`Mi nombre es ${sillyName}.`);
console.log(`Mi nombre de Super Heroe es ${superHeroes}.`);