
let htmlCodeInput = document.getElementById('htmlCode');
let cssCodeInput = document.getElementById('cssCode');
let jsCodeInput = document.getElementById('jsCode');
let runButton = document.getElementById('runButton');
let outputFrame = document.getElementById('output');

htmlCodeInput.value = localStorage.getItem('htmlCode') || '';
cssCodeInput.value = localStorage.getItem('cssCode') || '';
jsCodeInput.value = localStorage.getItem('jsCode') || '';


function updateOutput() {
  let htmlCode = htmlCodeInput.value;
  let cssCode = `<style>${cssCodeInput.value}</style>`;
  let jsCode = `<script>${jsCodeInput.value}</script>`;

  let outputContent = htmlCode + cssCode + jsCode;
  let outputDoc = outputFrame.contentWindow.document;
  outputDoc.open();
  outputDoc.write(outputContent);
  outputDoc.close();

  localStorage.setItem('htmlCode', htmlCode);
  localStorage.setItem('cssCode', cssCodeInput.value);
  localStorage.setItem('jsCode', jsCodeInput.value);
}

runButton.addEventListener('click', updateOutput);
updateOutput();
