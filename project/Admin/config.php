<?php 
// session_start();

$servername = "localhost";
$username = "root";
$password = "";
$database = "new-arrival";

$conn = mysqli_connect($servername, $username, $password, $database);

if (!$conn) {
    die("CONNECTION FAILED! " . mysqli_connect_error());
}else{
    // echo "connected";
}
?>

