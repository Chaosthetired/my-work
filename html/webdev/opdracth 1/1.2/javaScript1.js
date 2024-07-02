function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value) || 0; 
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    var result;
    if(operation === 'add') {
        result = num1 + num2;
    } 

    document.getElementById('result').textContent = result;
}



