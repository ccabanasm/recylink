console.log("Respuestas prueba algorítmica");
console.log("=============================");

console.log("\n1. Composite function");
function rokket1(c) {
// función rokket1 retorna un Int que corresponde al producto entre tres enteros
// sintaxis: rokket1(Int1)(Int2)(Int3)
    return a => {
        return b => a * b * c;
    }
}

console.log("rokket1(2)(5)(3)");
console.log(rokket1(2)(5)(3));
console.log("rokket1(4)(2)(2)");
console.log(rokket1(4)(2)(2));
console.log("rokket1(8)(2)(1)");
console.log(rokket1(8)(2)(1));

console.log("\n2. Longest string");
function rokket2(arr) {
// función rokket2 retorna un String que corresponde al String de mayor longitud
// de un Array de Strings entregado
// sintaxis: rokket2([String1, String2, ..., Stringn])
    let lengths = arr.map(a => a.length);
    return arr[lengths.indexOf(Math.max(...lengths))];
}
console.log("rokket2( ['best', 'company', 'ever'])");
console.log(rokket2( ['best', 'company', 'ever']));

console.log("\n3. String repetition");
function rokket3(str, n) {
// función rokket3 retorna un string str concatenado n veces
// sintaxis: rokket3(String, Int)
    let result = ""
    for (let i = 0; i < n; i++) {
        result += str;
    }
    return result;
}

console.log("rokket3('node', 5)");
console.log(rokket3('node', 5));
console.log("rokket3('abc', 2)");
console.log(rokket3('abc', 2));

console.log("\n4. Only last names");
function rokket4(arr) {
// función rokket4 retorna un Array de Strings que corresponden a los campos
// "lastName" de un Array de Objects definidos como:
// { fistName: String, lastName: String }
// sintaxis: rokket4([Object1, Object2, ..., Objectn])
    return arr.map(a => a["lastName"]);
}
const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' }
];
console.log("rokket4(contacts)");
console.log(rokket4(contacts));

console.log("\n5. Unique numbers");
function rokket5(arr1, arr2) {
// función rokket5 retorna un Array que corresponde a los elementos comunes
// entre dos Arrays
// sintaxis: rokket5(Array, Array)
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            result.push(arr1[i]);
        }
    }
    return result;
}

console.log("rokket5([1, 2, 5], [2, 1, 6])");
console.log(rokket5([1, 2, 5], [2, 1, 6]));
console.log("rokket5([1, 2, 3], [4, 5, 6])");
console.log(rokket5([1, 2, 3], [4, 5, 6]));
