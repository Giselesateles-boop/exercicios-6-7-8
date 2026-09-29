const caixa = new Map();

caixa.set('Arroz', 7.10);
caixa.set('Feijão', 2.30);
caixa.set('Macarrão', 4.70);
caixa.set('Refrigerante', 3.00);


const fretes = new Map();

fretes.set('São Paulo', 10.10);
fretes.set('Rio de Janeiro', 12.30);
fretes.set('Brasília', 14.70);
fretes.set('Outros', 13.00);


function calculaValorTotalDaCompra(produtos, cidade, caixa, fretes) {

    let total = 0;

    for (const produto of produtos) {
        total += caixa.get(produto);
    }

    total += fretes.get(cidade);

    return total;
}


console.log(
    calculaValorTotalDaCompra(
        ['Arroz'],
        'São Paulo',
        caixa,
        fretes
    )
);

//Resultado: 17.2