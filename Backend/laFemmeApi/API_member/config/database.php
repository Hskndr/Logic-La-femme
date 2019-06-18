<?php
// used to connect to the database https://medium.com/ramsatt/angular-7-crud-part-2-web-api-preparation-4954acfbd09d
$host = "localhost";
$db_name = "lafemme1new";
$username = "lafemme1newadmin";
$password = "]uRuopCYsAul";
  
try {
    $con = new PDO("mysql:host={$host};dbname={$db_name}", $username, $password);
}
  
// show error
catch(PDOException $exception){
    echo "Connection error: " . $exception->getMessage();
}
?>
