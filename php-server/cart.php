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
    $sql="SELECT * FROM cart WHERE username='ayush'";
    $result=mysqli_query($conn,$sql);

    $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

    $rarray=[];
    foreach($rows as $row){
        array_push($rarray, $row["cart"]);
    }
    


    $str = $rarray[0];
    $strArray = explode(',', $str);
    $numArray=array_map('intval', $strArray);
    $srtArray = array_map('strval', $strArray);
    
    $array=json_encode($strArray);
    
    print_r($array);
    


    
}
?>