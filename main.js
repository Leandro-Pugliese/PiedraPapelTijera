// Inicar game   
    const botonStart = document.getElementById("boton-start");
    
    const iniciarGame = () => {
        document.getElementById("start__container").style.display = "none";
        document.getElementById("elegir__ataque").style.display = "flex";
    }

    botonStart.addEventListener("click", iniciarGame);

// Elegir mano jugador y mano Aleatoria (maquina)
    const botonAceptar = document.getElementById("aceptar");

    // Eleccion aleatoria de numero para elegir ataque de la maquina.
    const getRandomInt = (max) => {
        return Math.floor(Math.random() * max);
    }
    let maquina = "";

    // Variable para guardar valor elegido por el jugador.
    let jugador = "";

    // Turnos y resultado final
    let resultados = []
   
    // Eleccion ataque de jugador y maquina.
    const eleccion = () => {
        jugador = document.getElementById("ataque__elegido").value
        
        let eleccionMaquina =  getRandomInt(3)
        
        if (eleccionMaquina === 0) {
            maquina = "PIEDRA";
        } else if (eleccionMaquina === 1) {
            maquina = "PAPEL";
        } else if (eleccionMaquina === 2) {
            maquina = "TIJERA";
        }

        // Resultado
        const resultadoJugador = document.getElementById("jugador");
        const resultadoMaquina = document.getElementById("maquina");
        resultadoJugador.innerHTML = `<p>Round ${resultados.length + 1}</p> <h3>Jugador: ${jugador}</h3>`
        resultadoMaquina.innerHTML = `<h3> Maquina: ${maquina}</h3>`
        
        const ganador = document.getElementById("ganador");
        
        if (jugador === maquina ) {
            ganador.innerHTML = `<h3> EMPATE </h3>`
            resultados.push("E")
        } else if ( jugador === "PIEDRA" && maquina === "PAPEL" || jugador === "PAPEL" && maquina === "TIJERA" || jugador === "TIJERA" && maquina === "PIEDRA") {
            ganador.innerHTML = `<h3> ¡PERDISTE! </h3>`
            resultados.push("P")
        } else if (jugador === "PIEDRA" && maquina === "TIJERA" || jugador === "PAPEL" && maquina === "PIEDRA" || jugador === "TIJERA" && maquina === "PAPEL") {
            ganador.innerHTML = `<h3> ¡GANASTE! </h3>`
            resultados.push("G")
        }

        if (resultados.length === 5) {
            const ganados = resultados.filter((element) => element === "G");
            const empates = resultados.filter((element) => element === "E");
            const perdidos = resultados.filter((element) => element === "P");

            document.getElementById("elegir__ataque").style.display = "none";
            botonAceptar.style.display = "none";
            const showResultados = document.getElementById("partida");
            showResultados.innerHTML = `<p>Rondas Ganadas: ${ganados.length}</p>
                                        <p>Rondas Empatadas: ${empates.length}</p>
                                        <p>Rondas Perdidas: ${perdidos.length}</p>`

            const textoFinal = document.getElementById("textoFinal") 
            if (ganados.length > perdidos.length ) {
                textoFinal.innerHTML = `¡Felicitaciones, GANASTE!`
            } else if (ganados.length < perdidos.length) {
                textoFinal.innerHTML = `¡Ups, PERDISTE!`
            } else if (ganados.length === perdidos.length) {
                textoFinal.innerHTML = `¡A veces no se gana ni se pierde, se EMPATA!`
            }
        }
    }

    botonAceptar.addEventListener("click", eleccion);
    
