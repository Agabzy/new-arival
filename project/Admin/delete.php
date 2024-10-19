<?php
include_once "config.php";

  $id = $_GET['id'];

  $sql = "DELETE FROM booking Where id='$id'";
  $query = mysqli_query($conn,$sql);
  if($query){
    $_SESSION['success'] = "Record deleted successfully";
  }else{
    $_SESSION['error'] = "Unable to delete record";
  }







// $table = $_GET['table'];

// if ($table === 'bookings') {
//     $sql = "DELETE FROM booking WHERE id='$id'";
// }

// if ($table === 'messages') {
//     $sql = "DELETE FROM message WHERE id='$id'";
// }

// if ($table === 'bookings' || $table === 'messages') {
//   $result = mysqli_query($conn, $sql);    
// } else {
//   $_SESSION['error'] = "Unable to delete record try again later";
// }
// if ($result) {
//   switch ($table) {
//       case 'bookings':
//           $_SESSION['success'] = "Booking record deleted successfully!";
//           break;
//       case 'messages' :
//           $_SESSION['success'] = "Messages record deleted successfully!";
//           break;
//       default:
//       $_SESSION['success'] = "Record deleted successfully!";
//           break;
//   }
// }

?>