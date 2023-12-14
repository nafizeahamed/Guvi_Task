<?php
// Establish MySQL connection
$mysqli = new mysqli("localhost", "root", "", "users");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get user input
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);
//$password = $_POST['password'];
// Prepare and execute MySQL statement
$stmt = $mysqli->prepare("INSERT INTO users (username, password) VALUES (?, ?)");
$stmt->bind_param("ss", $username, $password);
$result = $stmt->execute();

// Close statement and connection
$stmt->close();
$mysqli->close();

// Redirect to login page
if ($result) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false]);
}
?>
