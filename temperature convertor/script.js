const convertBtn = document.getElementById('convertBtn');
const inputTemperature = document.getElementById('inputTemperature');
const selectUnit = document.getElementById('selectUnit');
const result = document.getElementById('result');

convertBtn.addEventListener('click', function() {
  const temperature = parseFloat(inputTemperature.value);
  const unit = selectUnit.value;
  let convertedTemperature;

  if (unit === 'celsius') {
    convertedTemperature = convertToCelsius(temperature);
  } else if (unit === 'fahrenheit') {
    convertedTemperature = convertToFahrenheit(temperature);
  } else if (unit === 'kelvin') {
    convertedTemperature = convertToKelvin(temperature);
  }

  result.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
});

function convertToCelsius(temperature) {
  return (temperature - 32) * 5 / 9;
}

function convertToFahrenheit(temperature) {
  return temperature * 9 / 5 + 32;
}

function convertToKelvin(temperature) {
  return temperature + 273.15;
}
