//criação da função normal 
function escreverNoConsole(){
    console.log("Primeiro exemplo - função normal")
}

// chama a função para executar 
escreverNoConsole();

//variação de função normal ou declarada 

const escreverNoConsoleVariacao = function(){
    console.log("Segundo exemplo - variação do modo normal")
}

//chama a função para executar 
escreverNoConsoleVariacao();

//arrow function função seta ou flecha 
//toda arrow function usar os caracters = junto com > 
const escreverComArrow =  ()=>{
    console.log("Terceira - Arrow Function")      // o return é opcional 
}

//chama a função para executar 
escreverComArrow();

// arrow function => com parametro 
const escreverComArrowParametro = (texto) => {
    console.log("texto"); 
}   // se tiver apenas um parâmetro pode ser omitido as chaves {}

//chama a função para executar 
escreverComArrowParametro("Quarto exemplo, usando parametro")
escreverComArrowParametro("Outro texto")

//função arrow que somar dois valores 
const somarDois = (numero1, numero2)=>{
    console.log("A soma é " +(numero1+numero2))
}

//executando 
console.log("------------------------------------")
somarDois(10,10)

//variação arrow function sem parenteses e sem chave 
const varianteArrow = texto => console.log(texto)

//crie uma arrow function chamada parImpar que recebe 
//um parametro numérico e informar na saída este numero 
//e mais um texto conforme a situação 
// [numero], este valor é negativo
// [numero], este valor é neutro  
// [numero], este valor é par 
// [numero], este valor é impar

const parImpar = (numero) => {
    if (numero<0) {
      console.log(numero+ "este valor é negativo");
    } else if(numero==0) {
      console.log(numero+ "este valor é neutro");
    } else if((numero % 2)==0) {
      console.log(numero+ "este valor é par");
    } else {
      console.log(numero+ "este valor é ímpar");
    }
  };