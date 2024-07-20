<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost','root','','dealdive');

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $pid=$_POST['pid'];

    if($pid==""){

    }
    else{
        $sql= "UPDATE cart SET cart = CONCAT(cart, '$pid,') WHERE username = 'ayush'";
        $result = mysqli_query($conn , $sql);





        
    
       
    }

    $conn->close();
}
?>