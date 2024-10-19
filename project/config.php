<?php 
// session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "new-arrival";

$con = mysqli_connect($servername, $username, $password, $database);

if (!$con) {
    die("CONNECTION FAILED! " . mysqli_connect_error());
}else{
    // echo "connected";
}
?>

