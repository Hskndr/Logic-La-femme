<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 
// check if form was submitted
if($_POST){
    include 'config/database.php';
    try{
        // write update query
        // in this case, it seemed like we have so many fields to pass and 
        // it is better to label them and not use question marks
        $query = "UPDATE memberRegister SET
        p_userName=:userName, 
        p_password=:password, 
        p_country=:country, 
        p_state=:state, 
        p_postalZipCode=:postalZipCode, 
        p_dateOfBirth=:dateOfBirth, 
        p_age=:age, 
        p_zodiacSign=:zodiacSign, 
        p_raceEthnic=:raceEthnic, 
        p_email=:email, 
        p_typeRelation=:typeRelation, 
        p_invitationCode=:invitationCode, 
        p_lookingFor=:lookingFor, 
        p_bodyType=:bodyType, 
        p_height=:height, 
        p_weight=:weight, 
        p_eyesColor=:eyesColor, 
        p_hairColor=:hairColor, 
        p_hairLength=:hairLength, 
        p_tattoos=:tattoos                     
                     
        WHERE p_id = :id";
 
        // prepare query for excecution
        $stmt = $con->prepare($query);
 
        // posted values

        $id = $_POST['id'];
        $userName = $_POST['userName'];
        $password = $_POST['password'];
        $country = $_POST['country'];
        $state = $_POST['state'];
        $postalZipCode = $_POST['postalZipCode'];
        $dateOfBirth = $_POST['dateOfBirth'];
        $age = $_POST['age'];
        $raceEthnic = $_POST['raceEthnic'];
        $email = $_POST['email'];
        $typeRelation = $_POST['typeRelation'];
        $invitationCode = $_POST['invitationCode'];
        $lookingFor = $_POST['lookingFor'];
        $bodyType = $_POST['bodyType'];
        $height = $_POST['height'];
        $weight = $_POST['weight'];
        $eyesColor = $_POST['eyesColor'];
        $hairColor = $_POST['hairColor'];
        $hairLength = $_POST['hairLength'];
        $tattoos = $_POST['tattoos'];
 
        // bind the parameters

        $stmt->bindParam(':userName ', $userName);
        $stmt->bindParam(':password ', $password);
        $stmt->bindParam(':country ', $country);
        $stmt->bindParam(':state ', $state);
        $stmt->bindParam(':postalZipCode ', $postalZipCode);
        $stmt->bindParam(':dateOfBirth ', $dateOfBirth);
        $stmt->bindParam(':age ', $age);
        $stmt->bindParam(':raceEthnic ', $raceEthnic);
        $stmt->bindParam(':email ', $email);
        $stmt->bindParam(':typeRelation ', $typeRelation);
        $stmt->bindParam(':invitationCode ', $invitationCode);
        $stmt->bindParam(':lookingFor ', $lookingFor);
        $stmt->bindParam(':bodyType ', $bodyType);
        $stmt->bindParam(':height', $height);
        $stmt->bindParam(':weight ', $weight);
        $stmt->bindParam(':eyesColor ', $eyesColor);
        $stmt->bindParam(':hairColor ', $hairColor);
        $stmt->bindParam(':hairLength ', $hairLength);
        $stmt->bindParam(':tattoos ', $tattoos);
         
        // Execute the query
        if($stmt->execute()){
            echo json_encode(array('result'=>'success'));
        }else{
            echo json_encode(array('result'=>'fail'));
        }
         
    }
     
    // show errors
    catch(PDOException $exception){
        die('ERROR: ' . $exception->getMessage());
    }
}
?>
