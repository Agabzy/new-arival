<?php
session_start();
include "config.php";

$errors = [
  'username' => '',
  'pass' => '',
];

if ($_SERVER['REQUEST_METHOD'] == "POST") {
  $username = htmlspecialchars(trim($_POST['username']));
  $password = trim($_POST['password']);

  // Username Validation
  if (empty($username)) {
    $errors['username'] = "Name is required!";
  } else {
    if (!preg_match('/^[a-zA-Z0-9\s]+$/', $username)) {
      $errors['username'] = "Username allows only numbers and letters!";
    }
  }

  // Password Validation
  if (empty($password)) {
    $errors['pass'] = "Password is required!";
  } else {
    if (strlen($password) < 4) {
      $errors['pass'] = "Password must be at least 4 characters long!";
    }
  }

  // Only proceed if there are no validation errors
  if (!array_filter($errors)) {
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = mysqli_query($con, $sql);

    if (mysqli_num_rows($result) > 0) {
      $row = mysqli_fetch_assoc($result);

      if (password_verify($password, $row['password'])) {
        // Login successful
        $_SESSION['loggedin'] = true;

        $_SESSION['username'] = $username;
        
        // Redirect to React project landing page
        header("Location: http://localhost:5173/");
        exit(); // Ensure the script stops after the redirect
      } else {
        $_SESSION['error'] = "Invalid Credentials!";
      }
    } else {
      $_SESSION['error'] = "User not found! Go to signup page and create an account.";
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="container">
  <form action="login.php" method="post">
    <h1>Login</h1>

    <!-- Display error message -->
    <?php if (isset($_SESSION['error'])) { ?>
      <?php include_once "component/error.php"; ?>
      <?php unset($_SESSION['error']); ?>
    <?php } ?>

    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" name="username" id="username" placeholder="username">
      <div class="err-text"><?php echo $errors['username']; ?></div>
    </div>

    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" placeholder="password">
      <div class="err-text"><?php echo $errors['pass']; ?></div>
    </div>

    <button type="submit" name="submit">Login</button>
    <span class="signup-link">Don't have an account?<a href="signup.php"> Signup</a></span>
  </form>
</div>

</body>
</html>
