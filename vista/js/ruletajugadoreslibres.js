const roulette = document.querySelector("#roulette");
const spinButton = document.querySelector("#spin");
const resetButton = document.querySelector("#reset");

const maxSpins = 10;
const minSpins = 5;

const maxDegrees = 360;
const minDegrees = 1;

// Premios para cada sector (36 sectores)
const prizes = [
    "Hugo Lloris", "Keylor Navas", "Alderwerirld", "Criss Smalling", "Sergio Ramos",
    "Matip", "David Luiz", "Tiago Silva", "Manolas", "N. Fernandez",
    "Marcos Acuña", "Paul Pogba", "Kante", "Vidal", "Sergio Canales",
    "Fernandinho", "Pjanic", "Chamberlain", "W. Barrios", "L. Alberto",
    "M. Verrati", "Rakitic", "R. Puig", "Fekir", "Iker Muniain",
    "Memphis Depay", "Lucas Moura", "Jose Callejon", "Rafa Silva", "Ciro Inmobile",
    "Oliver Giroud", "Hojlund", "Karim Benzema", "Aubameyang", "Shaquiri",
    "Lingard"
];


const getRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

// Mostrar mensaje basado en el sector
const showPrizeMessage = (finalDegrees) => {
    const adjustedDegrees = finalDegrees % 360; // Reducir el rango a 0-359
    const sector = Math.floor(adjustedDegrees / 10); // Determinar el sector (0 a 35)
    alert(`¡La ruleta se detuvo en el numero ${sector + 1}: ${prizes[sector]}!`);
};

spinButton.addEventListener("click", () => {
    const spins = getRandomNumber(minSpins, maxSpins);
    const degrees = getRandomNumber(minDegrees, maxDegrees);

    const fullSpins = (spins - 1) * 360;
    const spin = fullSpins + degrees;

    const animationTime = spins;
    
    roulette.style.transform = `rotate(${spin}deg)`;
    roulette.style.transitionDuration = `${animationTime}s`;

    spinButton.style.display = "none";
    resetButton.style.display = "inline-block";

    // Esperar a que la animación termine antes de mostrar el premio
    setTimeout(() => {
        showPrizeMessage(spin);
    }, animationTime * 1000); // Convertir segundos a milisegundos
});

resetButton.addEventListener("click", () => {
    roulette.style.transform = "rotate(0deg)";
    roulette.style.transitionDuration = "2s";
    spinButton.style.display = "inline-block";
    resetButton.style.display = "none";
});
