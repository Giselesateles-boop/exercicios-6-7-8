function removeDuplicatas(numeros) {
    const numerosSemDuplicatas = new Set(numeros);

    return [...numerosSemDuplicatas];
}

console.log(removeDuplicatas([1, 1, 2, 2, 3, 3]));

//Resultado: [ 1, 2, 3 ]