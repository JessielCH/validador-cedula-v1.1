function validarCedula() {
  // Obtener el valor ingresado en el campo con id "cedula"
  const cedula = document.getElementById("cedula").value;

  // Obtener el elemento donde se mostrará el resultado
  const resultado = document.getElementById("resultado");

  // Validar que la cédula tenga exactamente 10 dígitos numéricos
  if (cedula.length !== 10 || isNaN(cedula)) {
    resultado.textContent = "Cédula inválida: debe tener 10 dígitos numéricos.";
    return;
  }

  // Convertir la cédula en un array de números
  const digitos = cedula.split("").map(Number);

  // Obtener el código de provincia (primeros 2 dígitos)
  const provincia = parseInt(cedula.substring(0, 2));

  // Obtener el tercer dígito, que no puede ser mayor a 6
  const tercerDigito = digitos[2];

  // Validar que el código de provincia esté entre 1 y 24 y que el tercer dígito sea válido
  if (provincia < 1 || provincia > 24 || tercerDigito > 6) {
    resultado.textContent = "Cédula inválida: código de provincia o tercer dígito incorrecto.";
    return;
  }

  let suma = 0;

  // Recorrer los primeros 9 dígitos y aplicar el algoritmo
  for (let i = 0; i < 9; i++) {
    let valor = digitos[i];

    // A las posiciones pares (0, 2, 4...) se multiplica por 2
    if (i % 2 === 0) {
      valor *= 2;

      // Si el resultado es mayor que 9, se resta 9
      if (valor > 9) valor -= 9;
    }

    // Acumular la suma
    suma += valor;
  }

  // Calcular el dígito verificador
  const verificador = (10 - (suma % 10)) % 10;

  // Comparar con el último dígito de la cédula
  if (verificador === digitos[9]) {
    resultado.textContent = "✅ Cédula válida";
  } else {
    resultado.textContent = "❌ Cédula inválida";
  }
}