// Archivo: script.js
function drawSquare() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    // Obtener valores de los campos de entrada
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);
    var width = parseInt(document.getElementById("width").value);
    var height = parseInt(document.getElementById("height").value);

    // Validar los valores de entrada
    if (isNaN(x) || isNaN(y) || isNaN(width) || isNaN(height)) {
        alert("Por favor, ingrese valores válidos para las coordenadas y dimensiones.");
        return;
    }

    // Limpiar el canvas antes de dibujar
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Dibujar un cuadrado
    context.beginPath();
    context.rect(x, y, width, height);
    context.fillStyle = "#007BFF";
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = "#0056b3";
    context.stroke();
}

function resetForm() {
    document.getElementById("myform").reset();
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
}
