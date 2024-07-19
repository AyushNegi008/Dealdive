<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Access-Control-Allow-Origin: *');

$conn = new mysqli('localhost','root','','Dealdive');

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
}
else{
    $pid=$_POST['pid'];

    if($pid==""){

    }
    else{

        require_once("cart.php");
        
        $index = array_search($pid, $numArray);

        if ($index !== false) {
            array_splice($numArray, $index, 1);
        }
        print_r($numArray);


        $pid_str="";
        foreach ($numArray as $nae){
            if($nae!=0){
                $pid_str .= "$nae,";
            }
        }

        print_r($pid_str);

        $sql= "UPDATE cart
        SET cart = '$pid_str'
        WHERE username = 'ayush'";

        $result = mysqli_query($conn , $sql);





        
    
       
    }

    $conn->close();
}
?>