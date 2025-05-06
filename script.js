function validarCedula() {
    const cedula = document.getElementById("cedula").value;
    const resultado = document.getElementById("resultado");
  
    if (cedula.length !== 10 || isNaN(cedula)) {
      resultado.textContent = "Cédula inválida: debe tener 10 dígitos numéricos.";
      return;
    }
  
    const digitos = cedula.split("").map(Number);
    const provincia = parseInt(cedula.substring(0, 2));
    const tercerDigito = digitos[2];
  
    if (provincia < 1 || provincia > 24 || tercerDigito > 6) {
      resultado.textContent = "Cédula inválida: código de provincia o tercer dígito incorrecto.";
      return;
    }
  
    let suma = 0;
    for (let i = 0; i < 9; i++) {
      let valor = digitos[i];
      if (i % 2 === 0) {
        valor *= 2;
        if (valor > 9) valor -= 9;
      }
      suma += valor;
    }
  
    const verificador = (10 - (suma % 10)) % 10;
    if (verificador === digitos[9]) {
      resultado.textContent = "✅ Cédula válida";
    } else {
      resultado.textContent = "❌ Cédula inválida";
    }
  }
  