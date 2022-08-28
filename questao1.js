
function validaTriangulo(a,b,c){
    return (a === b && b === c) && " Equilátero" ||
  (a === b || a === c || b === c) && " Isósceles" ||
  " Escaleno";
}

function validarInputsTriangulo(){
  
  lado1 = parseInt(document.getElementById("inputTriangulo1").value)
  lado2 =  parseInt(document.getElementById("inputTriangulo2").value)
  lado3 =  parseInt(document.getElementById("inputTriangulo3").value)

  if (!lado1|| !lado2 || !lado3){
    alert("Insira Numeros em cada um dos campos")
    return
  }
  alert(`Seu triangulo é : ${validaTriangulo(lado1, lado2, lado3)}` )
  
}

