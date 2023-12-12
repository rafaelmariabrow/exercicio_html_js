function validarFormulario() {
    const campoA = document.getElementById("campo-a").value;
    const campoB = document.getElementById("campo-b").value;
  
    if (campoB > campoA) {
      return true;
    } else {
      alert("O numero B deve ser maior que o numero A.");
      return false;
    }
  }
  