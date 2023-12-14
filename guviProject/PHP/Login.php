<?php
// Enable error reporting for debugging purposes
error_reporting(E_ALL);
ini_set('display_errors', 1);

session_start();

// MySQL connection setup
$mysqli = new mysqli("localhost", "root", "", "users");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get user input
$username = $_POST['username'];
$password = $_POST['password'];

// Use prepared statement to retrieve user data
$stmt = $mysqli->prepare("SELECT id, username, password FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();

// Bind the result columns to variables
$stmt->bind_result($id, $fetchedUsername, $hashedPassword);

// Fetch the result into variables
$stmt->fetch();

if (!$id || !password_verify($password, $hashedPassword)) {
    // No user found or incorrect password, return a JSON response
    echo json_encode(["success" => false]);
} else {
    // Successful login
    // Set user data in local storage (use JavaScript)
    //echo "<script>
    //        localStorage.setItem('username', '$fetchedUsername');
    //        </script>";

    // Return a JSON response indicating success
    // Store user information in session
    $_SESSION['user_id'] = $id;
    $_SESSION['username'] = $fetchedUsername;
    echo json_encode(["success" => true]);
}

// Close the prepared statement and the MySQL connection
$stmt->close();
$mysqli->close();
?>
