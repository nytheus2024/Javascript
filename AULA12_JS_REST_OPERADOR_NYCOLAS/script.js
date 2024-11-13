
//criar uma funçaõ para exibir uma lista de alunos
//function listaAlunos(aluno1,aluno2,aluno3,aluno4){
//   console.log("Sejam bemvindo todos os alunos");
//   console.log(aluno1); 
//  console.log(aluno2); 
//  console.log(aluno3); 
//  console.log(aluno4); 

// }

//na função não temos como saber de antemaõ quantos parâmetros serão passados
//aí entra em ação o Rest Operator que irá transformador os parâmetros em um array

//vamos reescrever a função utilizando o Rest Operator
function listaAlunos(...alunos){
    console.log("Sejam bemvindo todos os alunos");
    console.log(alunos);
    console.log(alunos[0]);
    console.log(alunos[3]); 
}
listaAlunos('Adamastor', 'Benevides', 'Conegundes', 'Demerval', 'Emengarda');


//outro exemplo: sorteador de numeros primos menores doque 20

function sorteadorPrimo(...numeros){
    console.log(numeros);
    //const numeroSorteado =Math.random()*numeros.length;

    const numeroSorteado = Math.floor(Math.random()*numeros.length)
    console.log(`posição ${numeroSorteado}`);
    console.log(`Número primo: ${numeros[numeroSorteado]}`);
}

sorteadorPrimo(2,3,5,7,11,13,17,19)

function sorteadorAlunos(...alunos){
    console.log(alunos)

    const alunoSorteado = Math.floor(Math.random()*alunos.length)
    console.log(`posição ${alunoSorteado}`);
    console.log(`Aluno : ${alunos[alunoSorteado]}`)
}

sorteadorAlunos("Aline", "Ana Clara", "André", "Bernardo", "Daniel", "Deivid", "Enrique", "Fernanda", "Gabriel Rossa", "Gabriel Zattera", "Heloise", "Izadora", "Jefte", "João Matheus", "João Maurício", "José Vitor", "Julia", "Kamila", "Karina", "Kevin", "Leonardo Freitas", "Leonardo Speçamilio", "Lorenzo", "Lucas", "Matheus", "Nicolas", "Nycolas", "Pedro Portela", "Rafaela", "Raphael", "Rayra", "Valentina", "Vinícius", "Vitor Garret", "Vitor Schuski", "Pedro da Silva", "Ana Luiza")

