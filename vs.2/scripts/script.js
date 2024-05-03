const nomeEmpregado = document.getElementById ("nome");
const filho = document.getElementById ("filhos");
const salario = document.getElementById ("salario");
const botaoCalcular = document.getElementById ("calcular");
const resultado = document.getElementById("resultado");
var familia = 0;

botaoCalcular.addEventListener('click', verificar);

function verificar(){
  if(nomeEmpregado.value === null || nomeEmpregado.value === undefined || nomeEmpregado.value === ""){
    window.alert("Por favor insira seu nome!");
  }
  else{
    if(filho.value === null || filho.value === undefined || filho.value === ""){
      window.alert("Por favor insira a quantidade de filhos corretamente!");
    }
    else{
      if(salario.value === null || salario.value === undefined || salario.value === ""){
        window.alert("Por favor insira o salário corretamente!");
      }
      else{
          if (salario.value  <= 806.80){
            familia = filho.value * 41.37;
          } 
          else {
            if (salario.value >= 806.81 || salario.value <= 1212.64){
              familia = filho.value * 29.16;
            } else {
                familia = 0;
              } 
            }
            resultado.style.display = "block";
            resultado.innerHTML = `${nomeEmpregado.value}, o salário família é de R$ ${familia}`; 
          }
          window.alert(`${nomeEmpregado.value}, o salario família é de: R$ ${familia}`)
      } 
    }
}

