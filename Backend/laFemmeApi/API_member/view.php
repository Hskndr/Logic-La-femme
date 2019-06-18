<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
// include database connection
include 'config/database.php';

// delete message prompt will be here

// select all data

$query = "SELECT p_userName, p_password, p_country, p_state, p_postalZipCode, p_dateOfBirth, p_age, p_raceEthnic, p_email, p_typeRelation, p_invitationCode, p_lookingFor, p_bodyType, p_height, p_weight, p_eyesColor, p_hairColor, p_hairLength, p_tattoos FROM memberRegister ORDER BY p_id DESC ";
$stmt = $con->prepare($query);
$stmt->execute();
$results = $stmt->fetchAll(PDO::FETCH_ASSOC);
$json = json_encode($results);
echo $json;
?>
