<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost', 'root', '', 'dealdive');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "SELECT * FROM product LIMIT 12";
$result = $conn->query($sql);

$rarray = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        
        $rarray[] = [
            'pid' => $row['pid'],
            'name' => $row['name'],
            'price' => $row['price'],
            'store' => $row['store'],
            'cetegeory' => $row['cetegeory'],
            'quantity' => $row['quantity'],
            'disc' => $row['disc'],
            'ingredient' => $row['ingredient'],
            'img' => $row['img'],
        ];
    }
}

$json_response = json_encode($rarray);


echo $json_response;


$conn->close();
?>