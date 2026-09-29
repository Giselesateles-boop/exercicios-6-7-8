var arrayFuncoes = [];
for(var i = 0; i < 10; i++){
 arrayFuncoes.push(function(){
 console.log(i);
 });
}
arrayFuncoes.forEach(function(funcao){
 funcao();
});

//a) Quais os valores são exibidos no console na execução desse
//código?
//  Resposta: O código original exibe o número 10 dez vezes,
// porque as funções utilizam o mesmo i após o término do loop.

//b) Como podemos ajustar o comportamento desta função
//utilizando ES6?
//Resposta:Podemos utilizar let no lugar de var.
// Assim, cada repetição do loop possui seu próprio valor de i.