<?php
// Enable error reporting for debugging purposes
error_reporting(E_ALL);
ini_set('display_errors', 1);

// MongoDB connection setup
require_once '\vendor\autoload.php';

use MongoDB\Client;

$mongoClient = new Client("mongodb://localhost:27017");
$database = $mongoClient->selectDatabase("guvidb");
$collection = $database->selectCollection("ProfileDetails");

// Get user input from POST request
$firstName = $_POST['fName'];
$lastName = $_POST['lName'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$age = $_POST['age'];

// Prepare data for MongoDB
$userData = [
    'fName' => $firstName,
    'lName' => $lastName,
    'email' => $email,
    'phone' => $phone,
    'age' => $age,
];

// Insert the data into MongoDB
$result = $collection->insertOne($userData);

if ($result->getInsertedCount() > 0) {
    echo "Profile saved successfully!";
} else {
    echo "Error saving profile.";
}

?>
