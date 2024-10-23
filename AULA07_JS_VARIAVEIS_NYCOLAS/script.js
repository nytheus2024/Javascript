//DIFERENÇAS ENTRE AVAR,LET E CONST

//VAR
var nome = 'Adamastor';
console.log(nome);

if(nome==='Adamastor'){
    var escola = 'CESF';
    console.log(escola);
}
console.log(escola);

escola = 'Sagrada';
console.log(escola);
//com variáveis do tipo var podemios acessar(Visibilidade)
//fora do escopo de criação da variável

//LET
if(nome === 'Adamastor'){
    let curso = 'DS';
    console.log(curso);
}
//console.log(curso);
curso = 'Desenvolvimento';
console.log(curso)

//let só permite o acesso à variavel no escopo onde ele foi criada(escopo de bloco)
//se reatribuirmos valo a ela é como se estivéssemos declarando uma nova variável
//do tipo var com o mesmo nome curso

//CONST
const cargo = 'estudante';
console.log(cargo)
///cargo = 'programador';
console.log(cargo);

//Variáveis do tipo const tem escopo de bloco, com as left, mas ela não
//permite reatribuição de valor


//CRIAÇÃO DE VARIAÛEIS SEM ATRIBUIÇÃO INICIAL
var aluno1;
aluno1 = 'Ana Clara';
console.log(aluno1);

let aluno2
aluno2 = 'Bernardo';
console.log(aluno2);

//const aluno3; variáveis do tipo const não podem ser apenas declaradas
const aluno3 = 'Cremilda';
console.log(aluno3);
