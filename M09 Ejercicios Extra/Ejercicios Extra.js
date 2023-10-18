/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var claves = Object.keys(objeto);
   var nuevoArray = claves.map(function(clave) {
      return [clave, objeto[clave]];
   });
   return nuevoArray; 
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var conteo = {};
   for (var i = 0; i < string.length; i++) {
      var letra = string[i];
      if (conteo.hasOwnProperty(letra)) {
         conteo[letra]++;
      } else {
         conteo[letra] = 1;
      }
   }
   var letrasOrdenadas = Object.keys(conteo).sort();
   var resultado = {};
   letrasOrdenadas.forEach(function(letra) {
      resultado[letra] = conteo[letra];
   });
   return resultado;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var arrayMayuscula = [];
   var arrayMinuscula = [];
   for(var i = 0; i < string.length; i++) {
      if(string[i] === string[i].toLocaleUpperCase()) {
         arrayMayuscula.push(string[i]);
      } else {
         arrayMinuscula.push(string[i]);
      }
   }
   return arrayMayuscula.join("") + arrayMinuscula.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nuevoArray = [];
   var stringToArray = frase.split(" ");
   for (var i = 0; i < stringToArray.length; i++) {
      var mirror = stringToArray[i].split("").reverse().join("");
      nuevoArray.push(mirror);
   }
   return nuevoArray.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numToStr = numero.toString();
   var numStrInvertido = numToStr.split("").reverse().join("");
   if (numToStr === numStrInvertido) {
      return "Es capicua";
   } else {
      return "No es capicua";
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var palabra = string.split("");
   return palabra.map(function(letra) {
      if (letra !== "a" && letra !== "b" && letra !== "c") {
         return letra;
      }
   }).filter(function(dato) {
      return dato != undefined;
   }).join("");  
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   arrayOfStrings.sort(function(a, b) {
      return (a.length - b.length);
   });
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   nuevoArray = [];
   for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
         nuevoArray.push(array1[i]);
      }
   }
   return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
