function fibo(numero) {
    let a = 0, b = 1, temp;
  
    if (numero === a || numero === b) return true;
  
    while (b <= numero) {
        temp = a;
        a = b;
        b = temp + b;
      
        if (b === numero) return true;
    }
  
    return false;
}

let numero = 35;
if (fibo(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}