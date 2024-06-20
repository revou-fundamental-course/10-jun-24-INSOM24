let isCelsiusToFahrenheit = true;

document.addEventListener('DOMContentLoaded', function() {
    updateFormLabels();
    updateFormulaExplanation();
});

document.getElementById('convertButton').addEventListener('click', function() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }
    if (isCelsiusToFahrenheit) {
        convertToFahrenheit(temperature);
    } else {
        convertToCelsius(temperature);
    }
});

document.getElementById('reverseButton').addEventListener('click', function() {
    isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
    updateFormLabels();
    updateFormulaExplanation();
    resetResult();
});

function updateFormLabels() {
    const label = document.getElementById('temperatureLabel');
    const input = document.getElementById('temperatureInput');
    const explanation = document.getElementById('explanation');
    if (isCelsiusToFahrenheit) {
        label.innerText = 'Celsius (°C):';
        input.placeholder = 'Enter temperature in Celsius';
        explanation.value = 'Rumus: (°C × 9/5) + 32 = °F';
    } else {
        label.innerText = 'Fahrenheit (°F):';
        input.placeholder = 'Enter temperature in Fahrenheit';
        explanation.value = 'Rumus: (°F - 32) × 5/9 = °C';
    }
}

function updateFormulaExplanation() {
    const celsiusToFahrenheitFormula = document.getElementById('celsiusToFahrenheitFormula');
    const fahrenheitToCelsiusFormula = document.getElementById('fahrenheitToCelsiusFormula');
    if (isCelsiusToFahrenheit) {
        celsiusToFahrenheitFormula.style.display = 'block';
        fahrenheitToCelsiusFormula.style.display = 'none';
    } else {
        celsiusToFahrenheitFormula.style.display = 'none';
        fahrenheitToCelsiusFormula.style.display = 'block';
    }
}

function resetResult() {
    document.getElementById('convertedTemperature').value = '';
    document.getElementById('explanation').value = '';
}

function convertToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('convertedTemperature').value = `Celsius (°C): ${celsius.toFixed(2)}`;
    document.getElementById('explanation').value = `Cara Kalkulasi: (${fahrenheit}°F - 32) × 5/9 = ${celsius.toFixed(2)}°C\nRumus: (°F - 32) × 5/9 = °C`;
}

function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('convertedTemperature').value = `Fahrenheit (°F): ${fahrenheit.toFixed(2)}`;
    document.getElementById('explanation').value = `Cara Kalkulasi: ${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F\nRumus: (°C × 9/5) + 32 = °F`;
}
