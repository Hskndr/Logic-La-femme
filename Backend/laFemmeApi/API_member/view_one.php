<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// get passed parameter value, in this case, the record ID
// isset() is a PHP function used to verify if a value is there or not
$id = isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');

//include database connection
include 'config/database.php';

// read current record's data
try {
    // prepare select query
    $query = "SELECT 
        p_userName, 
        p_password, 
        p_country, 
        p_state, 
        p_postalZipCode, 
        p_dateOfBirth, 
        p_age, 
        p_zodiacSign,
        p_raceEthnic, 
        p_email, 
        p_typeRelation, 
        p_invitationCode, 
        p_lookingFor, 
        p_bodyType, 
        p_height, 
        p_weight, 
        p_eyesColor, 
        p_hairColor, 
        p_hairLength,
        p_tattoos  
FROM memberRegister WHERE p_id = ? LIMIT 0,1";

    $stmt = $con->prepare($query);

    // this is the first question mark
    $stmt->bindParam(1, $id);

    // execute our query
    $stmt->execute();

    // store retrieved row to a variable
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    $json = json_encode($row);
    echo $json;
} // show error
catch (PDOException $exception) {
    die('ERROR: ' . $exception->getMessage());
}
?>
