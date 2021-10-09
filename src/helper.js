//diferencia de años
export function obtenDiferenciaYear(year) {
  return new Date().getFullYear() - year;
}

//Calula el total a pagor segun la marca
export function calcularMarca(marca) {
  let incremento;

  switch (marca) {
    case "europeo":
      incremento = 1.3;
      break;
    case "americano":
      incremento = 1.15;
      break;
    default:
      break;
  }

  return incremento;
}

// Calcula el tipo de seguro
export function obtenerPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

//Primera letra en mayuscula
export function primerMayuscula(texto) {
  return texto[0].toUpperCase() + texto.slice(1);
}
