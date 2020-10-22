// A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
    setTimeout(() => {
        const mars = {
            name: "Mars",
            distanceFromSun: {
                value: 227900000,
                measurementUnit: "kilometers",
            }
        };
        console.log("Returned planet: ", mars);
    }, 500);
  };
  
  //  poderia colocar o setTimeOut aqui, mas decidi colocar acima
setTimeout(() => getPlanet(), 3500); // imprime Marte depois de 4 segundos