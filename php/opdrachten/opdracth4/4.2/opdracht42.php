<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP</title>
	<link rel="stylesheet" href="styles.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>
<?php
$vaken = array("Vaken","Cijfers");    
$vak1 = array("PHP","8");
$vak2 = array("Engels","4");
$vak3 = array("Netwerken","5");
$vak4 = array("Rekenen","9");

$allArrays = array($vaken, $vak1, $vak2, $vak3, $vak4);

echo "<table>";

foreach ($allArrays as $row) {
    echo "<tr>"; // Start table row
    foreach ($row as $key => $cell) {
        $class = ''; // Variable to hold the class name
        if ($key == 1 && is_numeric($cell)) {
			
			switch ($cell) {
    case 8:
        $class = 'alert-info';
        break;
    case 4:
    case 5:
        $class = 'alert-danger';
        break;
    case 9:
        $class = 'alert-success';
        break;
    default:
        $class = '';
}

        }
        echo "<td class='$class'>$cell</td>"; // Using class instead of inline styles
    }
    echo "</tr>"; // End table row
}

echo "</table>";
?>
</body>
</html>