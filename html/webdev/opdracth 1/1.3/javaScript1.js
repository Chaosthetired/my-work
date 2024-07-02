function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value) || 0; 
    var num2 = parseFloat(document.getElementById('num2').value) || 0;
	var num3 = parseFloat(document.getElementById('num3').value) || 0;
	var num4 = parseFloat(document.getElementById('num4').value) || 0;
	var num5 = parseFloat(document.getElementById('num5').value) || 0;
    
    var result;
    if(operation === 'add') {
        product1 = num1 * 15.50 ;
		product2 = num2 * 12.00 ;
		product3 = num3 * 16.00 ;
		product4 = num4 * 9.00 ;
		product5 = num5 * 25.00 ;
		
		result = product1 + product2 + product3 + product4 + product5 
		
		if (result > 100)
		results = result - 10%
	}
		
		
		

    document.getElementById('result').textContent = result;
}



