/*
-----Lista de recursos usados para solucionar os exercicios

1 - join para concatenar o array e exibir melhor
2 - Usar o for no lugar do foreach, para ter mais controle sobre o tamanha/lenght do array, quando se retirar um item dele.
Quando eu retiro, o ultimo index começa a referenciar outro elemento.
3 - indexOf() para buscar o index de um conteudo no array
4 - unshift para adicionar no inicio do array e push no final
5 - shift para remover no inicio do array e pop no final
6 - concat para concatenar array Ex: array.concat(...outroArray);


7 - O mais chato de todos Splice, que serve para procurar um elemento pelo seu index, e retirar um numero de elementos, e também adicionar elementos no lugar especificado 
Ex: array.splice(indexElemento, nElRetirar, 'novoEl');

8 - Utilização de funções para retornar um valor
9 - Utilização do for com o break dentro de um if;

*/


(()=>{
  /*
Envolva todo o código desse desafio em uma IIFE.
*/
const myArray = ['el1','el2','el3'];
/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.


*/
console.log( 'O array em formato de string é: ' + myArray.join(', '));
// ?

/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?

const sul = ['Paraná', 'Santa Catarina', 'Rio Grande do Sul']; const sudeste = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais'];

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.

*/

const brasil = sul.concat(...sudeste);
console.log( '\nAlguns Estados do Brasil:' + brasil);

console.log(brasil)
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/

const norte = ['Amazonas', 'Pará', 'Amapá']
brasil.unshift(...norte)
console.log( '\nMais estados adicionados:' + brasil.join(', ') );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/


console.log( '\nEstado removido: ' + brasil.shift() );
// ?

/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?

const newSul = [];

brasil.forEach((estado)=>{
  sul.forEach((estSul)=>{
    if(estSul === estado){
       newSul.push(estado);
    }
  })
});


/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' + newSul.join(', '));
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' + brasil.join(', '));
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?

const nordeste = ['Bahia', 'Ceará', 'Piauí'];

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' + nordeste.join(', '));
// ?



/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?


const newSudeste = []
sudeste.forEach((estSudeste)=>{
  newSudeste.push(brasil.splice(brasil.indexOf(estSudeste), 1));
})

console.log('--Esse é o brasil: ' + brasil.join(', '))

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

brasil.push(...nordeste);

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste: ' + newSudeste);
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' + brasil.join(', '));
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?

const newBrasil = [];
function estado(id, estado){
  this.estado = estado;
  this.id = id;
}

brasil.forEach((estBrasil, index)=>{
  const obj = new estado(index,estBrasil);
  newBrasil.push(obj);
})


/*
Mostre o array `newBrasil` no console
*/
console.log(newBrasil);
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/



function verificaTamanhoDeLetras(nLetras){
  let resposta;
  for(let i = 0; brasil.length > i; i++){
    if(brasil[i].length > nLetras){
      console.log(brasil[i])
      resposta = "Sim, todos os estados tem mais de 7 letras!";
    }else{
      resposta = "Nem todos os estados tem mais de 7 letras!";
      break;
    }
  }
  return resposta;
}

console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' + verificaTamanhoDeLetras(7));
// ?

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/

function verificaEstado(estado){
  let resposta = '';
  for(let i =0; brasil.length > i; i++){
    if(brasil[i].toLocaleUpperCase === estado.toLocaleUpperCase){
      resposta = "Ceará está incluído!";
      break;
    }else{
      resposta = "Ceará não foi incluído :(";
    }
  }
  return resposta;
}
console.log( '\nCeará está incluído em `brasil`?' + verificaEstado('Ceará'));
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

let map = [];

map = newBrasil.map((est)=>{
    const sEstado = est;
    let copia = JSON.parse(JSON.stringify(est)); // Copia o Objeto do newBrasil e passa para variavel
    copia.estado = copia.estado + " pertence ao Brasil."
    copia.id = copia.id + 1;
    return copia;
})

//console.log(map);
console.log(newBrasil)

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' + map );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

const filter = [];


map.forEach((estObj)=>{
  let copia = JSON.parse(JSON.stringify(estObj));
  if((copia.id % 2) === 0 ){
    filter.push(copia);
  }
})




/*
Mostre o array filtrado acima no console.
*/
console.log( filter );
// ?
})();