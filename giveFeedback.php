<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get POST data
    $name = isset($_POST['name']) ? strip_tags(trim($_POST['name'])) : '';
    $email = isset($_POST['email']) ? trim($_POST['email']) : '';
    $message = isset($_POST['message']) ? strip_tags(trim($_POST['message'])) : '';
    // set id variable
    $id = 1;

    echo($name.", ".$email.", ".$message);

    $serverName = "apollo.anselm.edu";
    $username = "team3";
    $password = "team3pass";
    $dbName = "team3db";

    // sql connection
    $connection = mysqli_connect($serverName, $username, $password, $dbName);

    if (mysqli_connect_errno()){
        echo "Failed to connect.";
        exit();
    } else {
        $sql = "INSERT INTO users (id, name, email, message) VALUES ($id, $name, '$email, $message)";

        if (mysqli_query($connection, $sql)) {
         echo "New record created successfully";
        } else {
            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
            }
        }
    }
?>

