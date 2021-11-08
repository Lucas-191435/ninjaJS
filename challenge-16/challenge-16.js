(()=>{
/*
Exercicios da lista:
1 - Mostrar cada uma das letras do nome, com uma frase - usei um foreach para resolver
2 - Foi alterar a primeira letra de cada palavra, de uma string onde as palavras estão divididas por '-'
Para resolver esse, precisei separar as palavras usando split, pegar cada uma usando um for, e atribuir ao item da array ele mesmo depois de alterar sua primeira letra.
3 - Alterar a ultima letra de um nome, separei o nome em um array, peguei a ultima letra e alterei para qual eu queria.

4 - Esse eu tinha que retirar um parte de uma string, consegui retirar, usando o SLICE e SUBSTRING, mas em nenhuma consegui
encontrar um modo de achar o ultimo index string.slice(indexInicio, indexFinal); não achei o indexFinal.
*/ 





  /*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/
/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/

const name = 'Fernando';

console.log( 'As letras do seu nome:' );

Array.from(name).forEach((letra,index) =>{
  console.log(`${letra} é a ${index+1}ª letra do meu nome.`)
})
// ?

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/

let fullName = 'lucas-fernando';

function modificaNome(fullname){
  
  fullname = fullname.split('-'); 
  for(let i =0; fullname.length > i; i++){
    fullname[i]= fullname[i].charAt(0).toUpperCase() + fullname[i].substring(1);
  }
  return fullname.join(' ')
}
modificaNome(fullName)

console.log( '\nNome convertido à partir de um slug: ' +modificaNome(fullName) );
// ?

/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/

let arNomes = ['Lucas','Fernando','Gabriel','João','Luan']
let meusAmigos = '';
arNomes.forEach((nome,index)=>{
  if(arNomes.length - 2 === index){
    meusAmigos+= ', ' + nome + " e ";
  }else if((arNomes.length - 1) === index){
    meusAmigos += nome;
  }else if((index) === 0){
    meusAmigos += nome;
  }else{
    meusAmigos+= ', ' + nome;
  }
})
console.log( '\nMeus amigos: ' + meusAmigos );
// ?

/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/

const n = 'Roberto';
let arr = n.split('');
arr[arr.length-1] = 'a';
arr = arr.join('');

console.log( '\nEra "Roberto", agora é: ' + arr);
// ?

/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
//Exercicio incompleto!
const nando = 'fernando'

function buscaParteString(sCompleta, sParte){
  if(sCompleta.includes(sParte)){
   let a = sCompleta.slice(sCompleta.indexOf(sParte), sCompleta.length);
   console.log(a);
  }
}
console.log( '\nParte de uma string:' + nando.includes('nando'));

buscaParteString(nando, 'nando');
// ?

/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/


function intercalaLetrasDoNome(nome){
  nome = nome.toLowerCase();
  let aNome = nome.split("");
  let nomeIntercalado = "";
  aNome.forEach((letra, index)=>{
    if((index%2) == 0){
      nomeIntercalado += letra.toUpperCase();
    }else{
      nomeIntercalado += letra;
    }
  })

  return nomeIntercalado;
}

console.log( '\nNome com letras intercaladas entre caixa alta e baixa: ' + intercalaLetrasDoNome('Sabreiar') );
// ?
})();