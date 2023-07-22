const convertButton = document.getElementById('convertButton');
const entertemperature = document.getElementById('entertemperature');
const selectUnit = document.getElementById('selectUnit');
const output = document.getElementById('output');

convertButton.addEventListener('click', function() {
  const temperature = parseFloat(entertemperature.value);
  const unit = selectUnit.value;
  let convertedTemperature;

  if (unit === 'celsius') {
    convertedTemperature = convertToCelsius(temperature);
  } else if (unit === 'fahrenheit') {
    convertedTemperature = convertToFahrenheit(temperature);
  } else if (unit === 'kelvin') {
    convertedTemperature = convertToKelvin(temperature);
  }

  output.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
});

function convertToCelsius(temperature) {
  return [(temperature - 32) * 5] / 9;
}

function convertToFahrenheit(temperature) {
  return (temperature * 9 / 5) + 32;
}

function convertToKelvin(temperature) {
  return temperature + 273.15;
}
