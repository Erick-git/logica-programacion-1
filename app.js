const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Función para pedir un número válido
function solicitarNumero(mensaje) {
  return new Promise((resolve) => {
    const preguntar = () => {
      rl.question(mensaje, (respuesta) => {
        const numero = Number(respuesta);

        if (respuesta.trim() === "" || isNaN(numero)) {
          console.log("Entrada no válida. Por favor, ingresa un número.");
          preguntar();
        } else {
          resolve(numero);
        }
      });
    };

    preguntar();
  });
}

async function main() {
  try {
    const numero1 = await solicitarNumero("Ingresa el primer número: ");
    const numero2 = await solicitarNumero("Ingresa el segundo número: ");
    const numero3 = await solicitarNumero("Ingresa el tercer número: ");

    if (numero1 === numero2 && numero2 === numero3) {
      console.log(`Los tres números son iguales: ${numero1}, ${numero2}, ${numero3}`);
    } else {
      const numeros = [numero1, numero2, numero3];

      // Ordenar de menor a mayor
      numeros.sort((a, b) => a - b);

      const menorAMayor = `${numeros[0]}, ${numeros[1]}, ${numeros[2]}`;
      const mayorAMenor = `${numeros[2]}, ${numeros[1]}, ${numeros[0]}`;

      console.log("De mayor a menor:", mayorAMenor);
      console.log("De menor a mayor:", menorAMayor);
    }
  } catch (error) {
    console.error("Ocurrió un error:", error.message);
  } finally {
    rl.close();
  }
}

main();