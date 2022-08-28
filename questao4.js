function criarArray(valor){
  array = []
  for (let index = 1; index <= valor; index++) {
    
    if(index%5 == 0){
      if(index%9 == 0){
        array[index] = "Luidy Moura" 
      }else{
        array[index] = "Luidy" 
      }
    }else if(index%9 == 0){
        array[index] = "Moura" 
        console.log("erro")
    }else{
      array[index] = index
    }
    
  }
  return array
}

function validarInputsLista(){
  valor= parseInt(document.getElementById("inputLista").value)
    
  if (!valor){
    alert("Insira Numeros em cada um dos campos")
    return
  }else{
    alert(criarArray(valor))
  } 
}


