function appendNumber(number) {
    document.getElementById('display').value += number;
  }
  
  function appendOperator(operator) {
    document.getElementById('display').value += operator;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
    var result;
    try {
      result = eval(expression);
    } catch (error) {
      result = 'Error';
    }
    document.getElementById('display').value = result;
  }
  
