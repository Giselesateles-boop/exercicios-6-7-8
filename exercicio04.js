const jogador = {};

jogador.nome = 'Rodrigo';
jogador.idade = 33;

console.log(jogador.nome + '_' + jogador.idade);

//Resultado: Rodrigo_33

// O const impede que a variável jogador receba outro objeto.
// Porém, as propriedades do objeto podem ser alteradas ou adicionadas.
// Por isso, podemos fazer jogador.nome e jogador.idade.