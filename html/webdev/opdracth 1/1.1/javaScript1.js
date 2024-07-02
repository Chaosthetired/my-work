function addNumbers() {
    var num1 = document.getElementById('num1').value || ""; 
    var num2 = document.getElementById('num2').value || "";
    var num3 = document.getElementById('num3').value || "";

    var result = num1 + num2 + num3;

    document.getElementById('result').textContent = result;
}