// Estado inicial al cargar la página
history.replaceState({ view: 'temporadas' }, "", "");

// Equipos asignados para cada temporada
const equiposPorTemporada = {
    "33": [
        { name: "AC Milan", logo: "img/logoclubes/Milan.png" },
        { name: "Arsenal FC", logo: "img/logoclubes/Arsenal.png" },
        { name: "Aston Villa", logo: "img/logoclubes/AstonVilla.png" },
        { name: "Atletico de Madrid", logo: "img/logoclubes/AtleticodeMadrid.png" },
        { name: "Bayer Leverkusen", logo: "img/logoclubes/BayerLeverkusen.png" },
        { name: "Bayern Munich", logo: "img/logoclubes/BayerMunich.png" },
        { name: "Borussia Dortmund", logo: "img/logoclubes/BorussiaDortmund.png" },
        { name: "Chelsea FC", logo: "img/logoclubes/Chelsea.png" },
        { name: "FC Barcelona", logo: "img/logoclubes/Barcelona.png" },
        { name: "Inter de Milan", logo: "img/logoclubes/InterdeMilan.png" },
        { name: "Juventus", logo: "img/logoclubes/Juventus.png" },
        { name: "Liverpool", logo: "img/logoclubes/Liverpool.png" },
        { name: "Manchester City", logo: "img/logoclubes/ManchesterCity.png" },
        { name: "Manchester United", logo: "img/logoclubes/ManchesterUnited.png" },
        { name: "Napoli", logo: "img/logoclubes/napoles.png" },
        { name: "Newcastle United", logo: "img/logoclubes/newcastle.png" },
        { name: "PSG", logo: "img/logoclubes/psg.png" },
        { name: "RB Leipzig", logo: "img/logoclubes/rbleipzig.png" },
        { name: "Real Madrid", logo: "img/logoclubes/RealMadrid.png" },
        { name: "Tottenham", logo: "img/logoclubes/Tottenham.png" }
    ],
    "34": [
        { name: "AC Milan", logo: "img/logoclubes/Milan.png" },
        { name: "Arsenal FC", logo: "img/logoclubes/Arsenal.png" },
        { name: "Aston Villa", logo: "img/logoclubes/AstonVilla.png" },
        { name: "Atletico de Madrid", logo: "img/logoclubes/AtleticodeMadrid.png" },
        { name: "Bayer Leverkusen", logo: "img/logoclubes/BayerLeverkusen.png" },
        { name: "Bayern Munich", logo: "img/logoclubes/BayerMunich.png" },
        { name: "Borussia Dortmund", logo: "img/logoclubes/BorussiaDortmund.png" },
        { name: "Chelsea FC", logo: "img/logoclubes/Chelsea.png" },
        { name: "FC Barcelona", logo: "img/logoclubes/Barcelona.png" },
        { name: "Inter de Milan", logo: "img/logoclubes/InterdeMilan.png" },
        { name: "Juventus", logo: "img/logoclubes/Juventus.png" },
        { name: "Liverpool", logo: "img/logoclubes/Liverpool.png" },
        { name: "Manchester City", logo: "img/logoclubes/ManchesterCity.png" },
        { name: "Manchester United", logo: "img/logoclubes/ManchesterUnited.png" },
        { name: "Newcastle United", logo: "img/logoclubes/newcastle.png" },
        { name: "PSG", logo: "img/logoclubes/psg.png" },
        { name: "RB Leipzig", logo: "img/logoclubes/rbleipzig.png" },
        { name: "Real Madrid", logo: "img/logoclubes/RealMadrid.png" },
        { name: "Roma", logo: "img/logoclubes/asRoma.png" },
        { name: "Tottenham", logo: "img/logoclubes/Tottenham.png" }
    ],
    "35": [
        { name: "AC Milan", logo: "img/logoclubes/Milan.png" },
        { name: "Arsenal FC", logo: "img/logoclubes/Arsenal.png" },
        { name: "Aston Villa", logo: "img/logoclubes/AstonVilla.png" },
        { name: "Atletico de Madrid", logo: "img/logoclubes/AtleticodeMadrid.png" },
        { name: "Bayer Leverkusen", logo: "img/logoclubes/BayerLeverkusen.png" },
        { name: "Bayern Munich", logo: "img/logoclubes/BayerMunich.png" },
        { name: "Borussia Dortmund", logo: "img/logoclubes/BorussiaDortmund.png" },
        { name: "Chelsea FC", logo: "img/logoclubes/Chelsea.png" },
        { name: "FC Barcelona", logo: "img/logoclubes/Barcelona.png" },
        { name: "Inter de Milan", logo: "img/logoclubes/InterdeMilan.png" },
        { name: "Juventus", logo: "img/logoclubes/Juventus.png" },
        { name: "Liverpool", logo: "img/logoclubes/Liverpool.png" },
        { name: "Manchester City", logo: "img/logoclubes/ManchesterCity.png" },
        { name: "Manchester United", logo: "img/logoclubes/ManchesterUnited.png" },
        { name: "Newcastle United", logo: "img/logoclubes/newcastle.png" },
        { name: "PSG", logo: "img/logoclubes/psg.png" },
        { name: "RB Leipzig", logo: "img/logoclubes/rbleipzig.png" },
        { name: "Real Madrid", logo: "img/logoclubes/RealMadrid.png" },
        { name: "Roma", logo: "img/logoclubes/asRoma.png" },
        { name: "Tottenham", logo: "img/logoclubes/Tottenham.png" }
    ]
};


// Selección de temporada
function seleccionarTemporada(temporada) {
    if (equiposPorTemporada[temporada].length === 0) {
        document.getElementById("error-message").innerText = "Esta temporada no tiene equipos asignados.";
    } else {
        history.pushState({ view: 'equipos', temporada: temporada }, "", ""); // Guardar estado de la selección de temporada

        document.getElementById("temporadaContainer").style.display = "none";
        document.getElementById("error-message").innerText = "";
        cargarEquipos(temporada);
    }
}

// Cargar equipos para la temporada seleccionada
function cargarEquipos(temporada) {
    const equipoContainer = document.getElementById("equipoContainer");
    equipoContainer.innerHTML = "";

    equiposPorTemporada[temporada].forEach(equipo => {
        const button = document.createElement("button");
        button.className = "button team-button";
        button.onclick = () => {
            mostrarValoracion(equipo.name, temporada); // Pasar temporada y equipo
        };
        button.innerHTML = `<img src="${equipo.logo}" alt="${equipo.name} logo"> ${equipo.name}`;
        equipoContainer.appendChild(button);
    });

    equipoContainer.style.display = "flex";
}

// Valoraciones de jugadores para cada equipo y temporada
function mostrarValoracion(equipo, temporada) {
    // Registrar el estado actual en el historial del navegador
    history.pushState({ view: 'valoracion', equipo: equipo, temporada: temporada }, "", "");

    // Ocultar el contenedor de equipos y mostrar el contenedor de la imagen de valoración
    document.getElementById("equipoContainer").style.display = "none";
    document.getElementById("tablaValoracion").style.display = "block";

    const imagen = document.getElementById("valoracionImagen");

    // Asigna la imagen correspondiente al equipo y temporada
    if (equipo === "AC Milan") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionAcmilan_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionAcmilan_Temporada35.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionAcmilan_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Arsenal FC") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionArsenal_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionArsenal_Temporada35.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionArsenal_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Aston Villa") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionAstonVilla_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionAstonVilla_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionAstonVilla_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Atletico de Madrid") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionAtleticodeMadrid_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionAtleticodeMadrid_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionAtleticodeMadrid_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Bayer Leverkusen") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionBayerLeverkusen_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionBayerLeverkusen_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionBayerLeverkusen_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Bayern Munich") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionBayernMunich_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionBayernMunich_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionBayernMunich_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Borussia Dortmund") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionBorussiaDortmund_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionBorussiaDortmund_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionBorussiaDortmund_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Chelsea FC") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionChelseaFC_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionChelseaFC_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionChelseaFC_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "FC Barcelona") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionFCBarcelona_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionFCBarcelona_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionFCBarcelona_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Inter de Milan") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionInterdeMilan_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionInterdeMilan_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionInterdeMilan_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Juventus") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionJuventus_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionJuventus_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionJuventus_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Liverpool") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionLiverpool_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionLiverpool_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionLiverpool_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Manchester City") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionManchesterCity_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionManchesterCity_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionManchesterCity_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Manchester United") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionManchesterUnited_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionManchesterUnited_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionManchesterUnited_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Napoli") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionNapoli_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "#"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "#"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Newcastle United") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionNewcastleUnited_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionNewcastleUnited_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionNewcastleUnited_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "PSG") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionPSG_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionPSG_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionPSG_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "RB Leipzig") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionRBLeipzig_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionRBLeipzig_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionRBLeipzig_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Real Madrid") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionRealMadrid_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionRealMadrid_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionRealMadrid_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Roma") {
        if (temporada === "33") {
            imagen.src = "#"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionAsRoma_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionAsRoma_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

    if (equipo === "Tottenham") {
        if (temporada === "33") {
            imagen.src = "img/capturas/ValoracionTottenham_Temporada31.png"; // Imagen para la temporada 31
        } else if (temporada === "34") {
            imagen.src = "img/capturas/ValoracionTottenham_Temporada34_2.png"; // Imagen para la temporada 32
        } else if (temporada === "35") {
            imagen.src = "img/capturas/ValoracionTottenham_Temporada35_2.png"; // Imagen para la temporada 32
        }
    }

}




window.onpopstate = function(event) {
    if (event.state) {
        switch (event.state.view) {
            case 'temporadas':
                const temporadaContainer = document.getElementById("temporadaContainer");
                temporadaContainer.style.display = "flex";
                temporadaContainer.style.flexDirection = "column"; // Organiza el contenido en columna
                temporadaContainer.style.alignItems = "center"; // Centra el contenido horizontalmente
                temporadaContainer.style.justifyContent = "center"; // Centra el contenido verticalmente

                document.getElementById("equipoContainer").style.display = "none";
                document.getElementById("tablaValoracion").style.display = "none";
                break;
            case 'equipos':
                document.getElementById("temporadaContainer").style.display = "none";
                document.getElementById("equipoContainer").style.display = "flex";
                document.getElementById("tablaValoracion").style.display = "none";
                break;
            case 'valoracion':
                document.getElementById("temporadaContainer").style.display = "none";
                document.getElementById("equipoContainer").style.display = "none";
                document.getElementById("tablaValoracion").style.display = "block";
                break;
        }
    } else {
        document.getElementById("temporadaContainer").style.display = "flex";
        document.getElementById("temporadaContainer").style.flexDirection = "column";
        document.getElementById("temporadaContainer").style.alignItems = "center";
        document.getElementById("temporadaContainer").style.justifyContent = "center";

        document.getElementById("equipoContainer").style.display = "none";
        document.getElementById("tablaValoracion").style.display = "none";
    }
};





