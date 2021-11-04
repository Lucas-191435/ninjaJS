(()=>{
  /*
Envolva todo o código desse desafio em uma IIFE.
*/

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/

let numberObjects = [];
function addObjNumber(number){
  this.number = number;
}
let o = 0
while(o < 10){
  let obj = new addObjNumber(o+1);
  numberObjects.push(obj);
  o++;
}
console.log( 'Number Objects Array:', numberObjects );
// ?

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/

let justNumbers = [];

numberObjects.forEach((numero)=>{
  justNumbers.push(numero.number);
})
console.log( '\nJust Numbers:', justNumbers );
// ?

/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/

let justMod2Or3 = [];

justNumbers.forEach((numero)=>{
  if((numero % 2) === 0 || (numero % 2) === 0){
    justMod2Or3.push(numero);
  }
})
console.log( '\nJust module of division by 2 or 3:', [...justMod2Or3] );
// ?

/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/

let operation = 0;
for(let i =0; justMod2Or3.length > i; i++){
  let soma = justMod2Or3[i] + 1;
  let multiplicar = soma * justMod2Or3[i];
  
  operation += multiplicar;
}
console.log( '\nOperation: ' + operation );
// ?

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/

let operation2 = 0;
for(let i = justMod2Or3.length; 0 < i; i--){
  let soma = justMod2Or3[i-1] + 1;
  let multiplicar = soma * justMod2Or3[i-1];

  operation2 += multiplicar;
}
console.log( '\nOperation 2:' + operation2  );
// ?

/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/

const name = ['fer','nan','do'];




console.log( '\nSeu nome na língua do "P": '+ name.join('P') );
// ?

/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/

let inversedName = Array.from(name.join('')).reverse();

console.log( '\nInversed Name:'+ inversedName.join('') );
// ?

/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
// ?

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)


----------RESPOSTA-------------------------------------------------------------------------------------------
LINK DE REFERENCIA: https://pt.stackoverflow.com/questions/291203/como-comparar-se-dois-objetos-javascript-s%C3%A3o-iguais

AQUI ESTOU DEIXANDO UMA SOLUÇÃO PARA O EXERCICIO APÓS REALIZAR UMA PESQUISA.
NÃO HÁ MODO SIMPLES DE COMPARAR DOIS OBJETOS NO JAVASCRIPT, POR QUE CADA OBJ PODE FAZER REFERENCIA DIFERENTES NA MEMORIA.
O MODO DE VERIFICAR É, ANALISANDO O NUMERO DE PROPRIEDADES, COMPARAR O NOME DELAS E SEUS VALORES.

ISSO É DEMOSTRADO NO EXEMPLO LOGO ABAIXO.

var equals = function (object1, object2) {
    // Realiza a verificação das propriedades dos objetos.
    var prop1 = Object.getOwnPropertyNames(object1);
    var prop2 = Object.getOwnPropertyNames(object1);

    // Realiza a verificação se ambos objetos possuem o mesmo número de 
    // propriedades. Caso contrário, já retorna dizendo que são diferentes.
    if(prop1.length !== prop2.length)
        return false;

    // Aqui, está sendo verificado se o objeto possui alguma propriedade.
    // Será usado quando for chamada a função na sua forma recursiva,
    // para verificar valores literais.
    if(prop1.length === 0)
        if(object1 === object2)
            return true;
        else
            return false;

    // Se forem iguais, realiza uma iteração por todas as propriedades.
    for(var i = 0; i < prop1.length; i++) {
    // Guarda o valor da propriedade atual na variável "prop".
        var prop = prop1[i];

    // Aqui está o pulo do gato.
    // Verifica se o valor e o tipo das duas propriedades são iguais.
    // Se sim, somente pula para a próxima iteração. Caso contrário,
    // podem ser duas coisas: ou são realmente distintos, ou é um objeto,
    // que, ao comparar as referências, retorna sempre falso.
    // Para ter certeza da informação, é chamada a mesma função de forma
    // recursiva, mandando, por parâmetro, os dois objetos que ficou a dúvida.
    // Se forem iguais, ou se tiverem mais algum objeto internamente, 
    // a função continuará a ser chamada recursivamente, até chegar ao
    // ponto de ser um valor literal. Ou, então, retornará falso, pois não
    // são iguais.
    // Caso sejam iguais, a função só continuará para a próxima iteração.
    // Caso contrário, a função já informa que não são dois objetos iguais.
        if(object1[prop] !== object2[prop]){
            if(equals(object1[prop], object2[prop]))
                continue;
            else
                return false;
        }
    }
    // Se chegou até aqui e aguentou todas as verificações...
    // Os objetos são iguais!
    return true;
}



*/
let frase;

for(let i = 0; numberObjects.length > i ;i++){ 
  let obj = {number: 2};
  console.log(numberObjects[i])
  if(numberObjects[i] == obj){
    frase = "Existe um objeto { number: 2 } em numberObjects!";
    break;
  }else{
    frase = "Não existe um objeto { number: 2 } em numberObjects :(";
  }
}


console.log( '\nExiste um { number: 2 } em numberObjects? ' + frase );

// ?

/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );

// ?

/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );

if(typeof(justMod2Or3) == typeof([])){
  console.log('eee')

  console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' + justMod2Or3.join(''));
}

// ?

})()