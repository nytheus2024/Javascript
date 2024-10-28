let pessoa = {
    nome: `Nycolas`,
    sobreNome: `Marques`,
    empresa: `CESF`,
    cargo: `Studante`,
};

console.log(pessoa);
console.log(pessoa.nome);

//descontruir o objeto
const{nome,cargo,empresa}=pessoa;
console.log(nome);
console.log(empresa);


let nomes = ['Aparício','Bernadete','Cremilda'];
console.log(nomes);
let {0:primeroNome,1:segundoNome,2:terceiroNome}=nomes;
console.log(primeroNome);

//outro jeito de descontruir o array
let[primNome,segNome,tercNome]=nomes;
console.log(segNome);