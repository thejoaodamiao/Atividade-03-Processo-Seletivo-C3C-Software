function calcularMedia(nota){
    if(nota < 38 ){
        alert(`Aluno reprovado com nota: ${nota}`)
        return
    }else{
        divisao = nota/5
        multiplo = (Math.ceil(divisao))*5 
        if((multiplo - nota) < 3 && (multiplo - nota) > 0 ){
            nota = multiplo
            alert(`Nota do aluno foi arrendodada para: ${nota}`)
        }else{
        alert(`Nota do aluno: ${nota}`)
        }

    }
}



function validarInputsNota(){
  
    nota = parseInt(document.getElementById("inputNota").value)
    
  
    if (!nota){
      alert("Insira Numeros em cada um dos campos")
      console.log("erro2")
      return
    }else{
        if((nota < 100 && nota > 0) ){
            calcularMedia(nota)
            console.log("erro1")
        }else{
            alert("Notas só são permitidas acima de 0 e abaixo de 100")
            return
        }
    }
   
    
}

