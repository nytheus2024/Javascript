
// function acao() {
  //   document.write("executando ....<br/>");    
// }



//temporizador
//setInterval(acao,2000);

// setInterval(()=>{
  //  document.write("executando através de arrow function ...<br/>")
// },1000);

//clearInterval(timer);

//var timer = setInterval(()=>{
  //  document.write("executando através de arrow function ...<br/>")
//},1000);

//outro temporizador
function acao2(){
    document.write("Executando com o setTimeout<br/>");
}

setTimeout(acao2,1000);

setTimeout(()=>{
    document.write("Executando com arrow function!")
},4000);