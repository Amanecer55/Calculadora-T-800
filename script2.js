// script.js

document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    const side4 = parseFloat(document.getElementById('side4').value);
    const diagonal1 = parseFloat(document.getElementById('diagonal1').value);
    const diagonal2 = parseFloat(document.getElementById('diagonal2').value);

    const perimeter = side1 + side2 + side3 + side4;
    const area = 0.5 * diagonal1 * diagonal2;

    document.getElementById('perimeter').innerText = `Perímetro: ${perimeter} unidades`;
    document.getElementById('area').innerText = `Área: ${area} unidades cuadradas`;
});
