
function bhaskara(valorA, valorB , ValorC){
    const delta = valorB * valorB - 4 * valorA * ValorC;
    if(delta < 0){
        return "Delta é negativo"
    }else{
        coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
		coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);
        resultado = [coeficiente1, coeficiente2]
        return resultado
    }
  
}

function validarInputsBhaskara(){
  
    valorA = parseInt(document.getElementById("inputBhaskara1").value)
    valorB =  parseInt(document.getElementById("inputBhaskara2").value)
    ValorC =  parseInt(document.getElementById("inputBhaskara3").value)
  
    if (!valorA || ! valorB || !ValorC){
      alert("Insira Numeros em cada um dos campos")
      return
    }else{ 
        mensagem = bhaskara(valorA, valorB , ValorC) 
        if(mensagem.isArray){
            alert(`x1: ${mensagem[0]}, x2:${mensagem[1]}`)
        }else{
            alert(mensagem)
        }
    }
}
