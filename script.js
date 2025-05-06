function validarCedula(cedula) {
  // Validar que la cédula tenga exactamente 10 dígitos
  if (cedula.length !== 10) return false;

  // Convertir la cadena en un array de números
  const digitos = cedula.split('').map(Number);

  // Extraer el último dígito, que es el dígito verificador
  const digitoVerificador = digitos.pop();

  let suma = 0;

  // Recorrer los primeros 9 dígitos
  for (let i = 0; i < digitos.length; i++) {
    let valor = digitos[i];

    // Si la posición es par (0, 2, 4, ...), multiplicar por 2
    if (i % 2 === 0) {
      valor *= 2;

      // Si el resultado es mayor que 9, restar 9
      if (valor > 9) valor -= 9;
    }

    // Acumular la suma total
    suma += valor;
  }

  // Obtener el residuo de dividir la suma entre 10
  const modulo = suma % 10;

  // Si el residuo es 0, el dígito debe ser 0. Si no, restar de 10
  const digitoCalculado = modulo === 0 ? 0 : 10 - modulo;

  // Comparar el dígito calculado con el verificador original
  return digitoCalculado === digitoVerificador;
}