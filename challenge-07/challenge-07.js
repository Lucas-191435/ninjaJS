

function pessoa(pNome, sobrenome){
  function andar(){
    return `${pNome} andou 6k`;
  }



  return{
    pNome,
    sobrenome,
    andar,

  }
}



const lucas = pessoa('Lucas' , "Fernando");


console.log(lucas.andar)