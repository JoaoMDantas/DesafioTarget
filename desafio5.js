function stringInverter(x) {
    let stringInvertida = '';
    for (let i = x.length - 1; i >= 0; i--) {
        stringInvertida += x[i];
    }
    return stringInvertida;
}

let stringOriginal = "OpenAI";
let stringInvertida = stringInverter(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
