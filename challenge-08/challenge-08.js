/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ?


const sum = (n1, n2)=>{
  return `A soma de ${n1} e ${n2} é igual a ${n2+n1}.`;
}


console.log(sum(2,4))

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ?


function showName(nome){
  return `Meu nome é ${nome}`
}


/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?

const meuNome = showName;


console.log(meuNome('Lucas'))

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?

console.log(`A função ${meuNome.name} retorna ${meuNome}.`)



/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seg$inte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?

function calculator(operador){
  switch(operador){
    case "+":  
     return soma;
    break;
    case"-":
     return sub;
    break;
    case"*":
     return mult;
    break;
    case"/":
     return div; 
    break;
    case"%":
     return resto; 
    break;

    default:
      return console.log("Operação invalida");
    break
  }

  function soma(n1,n2,operador = "+"){
    return`Resultado da operação: ${n1} ${operador} ${n2} =  ${n1 + n2} `;
  }

  function sub(n1,n2,operador = "-"){
    return`Resultado da operação: ${n1} ${operador} ${n2} =  ${n1 - n2} `;
  }

  function div(n1,n2,operador = "/"){
    return`Resultado da operação: ${n1} ${operador} ${n2} =  ${n1 / n2} `;;
  }

  function mult(n1,n2,operador = "*"){
    return`Resultado da operação: ${n1} ${operador} ${n2} =  ${n1 * n2} `;
  }

  function resto(n1,n2,operador = "%"){
    return`Resultado da operação: ${n1} ${operador} ${n2} =  ${n1 % n2} `;
  }

}

console.log(calculator("+"));


let suma2 = calculator("+");
let subtraction = calculator("-");
let multiplication = calculator("*");
let division = calculator("/");
let mod = calculator("%");


console.log(suma2(5,5));
console.log(subtraction(5,5));
console.log(division(5,5));
console.log(multiplication(5,5));
console.log(mod(5,5));

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
// ?

/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?