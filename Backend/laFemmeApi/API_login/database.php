<?php

session_start();

$user = $_SESSION['user'];
/*SELECT records from userTable where username=sanitizedUserName*/

if ($user == 'admin') {
    echo '{
        "message": "This is a secret message only for admin",
        "success": true
    }';
} else {
    echo '{
        "message": " who are you ",
        "success": false
    }';
}

?>
