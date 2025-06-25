document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todas las filas de jugadores
    const playerRows = document.querySelectorAll('.odd');
    
    // Contar la cantidad de jugadores
    const playerCount = playerRows.length;
    
    // Actualizar el conteo de jugadores en el lugar especificado
    const playerCountElement = document.getElementById('player-count');
    playerCountElement.innerText = playerCount;
    
    // Seleccionar todas las celdas con los valores de los jugadores
    const playerValueElements = document.querySelectorAll('.player-value');
    
    // Sumar los valores de los jugadores
    let totalValue = 0;
    playerValueElements.forEach(element => {
        // Obtener el texto del elemento, eliminar 'mill. €' y convertirlo a número
        const valueText = element.innerText.replace(' mill. €', '').replace(',', '.');
        const value = parseFloat(valueText);
        totalValue += value;
    });
    
    // Actualizar el valor total en el lugar especificado
    const totalValueElement = document.querySelector('.data-header__market-value-wrapper');
    totalValueElement.innerHTML = `${totalValue.toFixed(2).replace('.', ',')}
        <span class="waehrung">mill. €</span>`;
    
    // Calcular el promedio de edad
    const ageElements = document.querySelectorAll('td.zentriert:nth-child(4)'); // Seleccionar la columna de edades
    let totalAge = 0;
    
    ageElements.forEach(element => {
        const age = parseInt(element.innerText, 10);
        totalAge += age;
    });
    
    const averageAge = totalAge / playerCount;
    
    // Actualizar el promedio de edad en el lugar especificado
    const playerAgeElement = document.getElementById('player-age');
    playerAgeElement.innerText = averageAge.toFixed(2);
});
