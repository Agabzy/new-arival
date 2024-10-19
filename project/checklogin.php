<?php 
// session_start();

// header('Content-Type: application/json');

// if(!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] !== true ){
//   echo json_encode(array("loggedin" => false));
// }else{
//   echo 
//   $response = array("loggedin" => true);

//   if(isset($_SESSION['username'])){
//     $response['username'] = $_SESSION['username'];
//   }else{
//     $response['username'] = null;
//   }
//   echo json_encode($response);
// }


session_start();
include "config.php";

$timeout_duration = 1800; // Set timeout duration (30 minutes)

// Check if the user is logged in
if (isset($_SESSION['loggedin'])) {
    // Check if session has timed out
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY']) > $timeout_duration) {
        // Session has timed out
        session_unset();     // Unset $_SESSION variables
        session_destroy();   // Destroy session data
        echo json_encode(['loggedin' => false]);
        exit();
    }
    $_SESSION['LAST_ACTIVITY'] = time(); // Update last activity time
    echo json_encode(['loggedin' => true]);
} else {
    echo json_encode(['loggedin' => false]);
}
?>

?>