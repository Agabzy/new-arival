<?php 
session_start();
include "config.php";

unset($_SESSION['error']);
unset($_SESSION['success']);

$errors =[
  'username' => '',
  'pass' => '',
];

// $success = '';

$username = $password = '';

if(isset($_POST['submit'])){
  $username = htmlspecialchars(trim($_POST["username"]));
  $password = $_POST['password'];

  // Username Validation
   if (empty($username)) {
    $errors['username'] = "Name is required!";
  } else {
    if (!preg_match('/^[a-zA-Z0-9\s]+$/', $username)) {
        $errors['username'] = "Username should contain only numbers and letters!";
    }
  }

   // PASSWORD VALIDATION
  if (empty($password)) {
    $errors['pass'] = "password is required!";
} else {
  if (strlen($password) < 4) {
    $errors['pass'] = "Password must be at least 4 characters long!";
}
}

  // check for errors
  if (!array_filter($errors)) {

  $psw = password_hash($password,PASSWORD_DEFAULT);

  $sql = "SELECT * FROM users WHERE username = '$username'";

  $result = mysqli_query($con,$sql);

  $query = mysqli_num_rows($result);

        
  if ($query > 0 ) {
      $_SESSION['error'] = "Username already exist!";
  } else{
     $sql = "INSERT iNTO users (username, password) VALUES ('$username', '$psw')";

     $result = mysqli_query($con, $sql);

     if ($result) {
         $_SESSION['success'] = "Registeration Successful! Head over to login page and login👍";
     } else {
         $_SESSION['error'] = " Unable to submit your data!";
     }
  }
  }
  mysqli_close($con);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Signup</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <form action="signup.php" method="post">
    <h1>Sign Up</h1>

    <!-- Display success message -->
    <?php if (isset($_SESSION['success'])) { ?>
      <?php include_once "component/success.php"; ?>
      <?php unset($_SESSION['success']); ?>
    <?php } ?>

    <!-- Display error message -->
    <?php if (isset($_SESSION['error'])) { ?>
      <?php include_once "component/error.php"; ?>
      <?php unset($_SESSION['error']); ?>
    <?php } ?>

    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" placeholder="username" value="<?php echo $username; ?>">
      <div class="err-text"><?php echo $errors['username']; ?></div>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="password">
      <div class="err-text"><?php echo $errors['pass']; ?></div>
    </div>

    <button type="submit" name="submit">Sign up</button>
    <span class="login-link">Already have an account?<a href="login.php"> Login</a></span>
  </form>
</div>


  
</body>
</html>