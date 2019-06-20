<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
if($_POST){

// include database connection
    include 'config/database.php';

    try{

// insert query
        $query = "INSERT INTO memberRegister SET 
p_name=:name, 
p_email=:email, 
p_password=:password, 
p_typeRelation=:typeRelation, 
p_invitationCode=:invitationCode, 
p_country=:country, 
p_state=:state, 
p_postalZipCode=:postalZipCode, 
p_dateOfBirth=:dateOfBirth,
p_age=:age,
p_zodiacSign=:zodiacSign,
p_raceEthnic=:raceEthnic";

// prepare query for execution
        $stmt = $con->prepare($query);
// posted values
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = $_POST['password'];
        $typeRelation = $_POST['typeRelation'];
        $invitationCode = $_POST['invitationCode'];
        $country = $_POST['country'];
        $state = $_POST['state'];
        $postalZipCode = $_POST['postalZipCode'];
        $dateOfBirth = $_POST['dateOfBirth'];
        $age = $_POST['age'];
        $zodiacSign = $_POST['zodiacSign'];
        $raceEthnic = $_POST['raceEthnic'];

// bind the parameters
        $stmt->bindParam(':name', $name);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':password', $password);
        $stmt->bindParam(':typeRelation', $typeRelation);
        $stmt->bindParam(':invitationCode', $invitationCode);
        $stmt->bindParam(':country', $country);
        $stmt->bindParam(':state', $state);
        $stmt->bindParam(':postalZipCode', $postalZipCode);
        $stmt->bindParam(':dateOfBirth', $dateOfBirth);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':zodiacSign', $zodiacSign);
        $stmt->bindParam(':raceEthnic', $raceEthnic);

// Execute the query
        if($stmt->execute()){
            echo json_encode(array('result'=>'success'));
        }else{
            echo json_encode(array('result'=>'fail'));
        }
    }
// show error
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
