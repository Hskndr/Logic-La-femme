-- src https://medium.com/ramsatt/angular-7-crud-part-2-web-api-preparation-4954acfbd09d
--
-- Table structure for table `memberRegister`
--
CREATE TABLE IF NOT EXISTS ` memberRegister `
(
    `p_id` int
(
    11
) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    ` p_userName ` varchar
(
    128
) NOT NULL,
    ` p_password ` varchar
(
    128
) NOT NULL,
    ` p_country ` varchar
(
    128
) NOT NULL,
    ` p_state ` varchar
(
    128
) NOT NULL,
    ` p_postalZipCode ` varchar
(
    128
) NOT NULL,
    ` p_dateOfBirth ` varchar
(
    128
) NOT NULL, -- CHECK TYPE
    ` p_age ` int NOT NULL,
    ` p_raceEthnic ` varchar
(
    128
) NOT NULL,
    ` p_email ` varchar
(
    128
) NOT NULL,
    ` p_typeRelation ` varchar
(
    128
) NOT NULL,
    ` p_invitationCode ` int NOT NULL,
    --  tell us more page.
    ` p_lookingFor ` varchar
(
    128
) NOT NULL,
    ` p_bodyType ` varchar
(
    128
) NOT NULL,
    ` p_height ` varchar
(
    128
) NOT NULL,
    ` p_weight ` varchar
(
    128
) NOT NULL,
    ` p_eyesColor ` varchar
(
    128
) NOT NULL,
    ` p_hairColor ` varchar
(
    128
) NOT NULL,
    ` p_hairLength ` varchar
(
    128
) NOT NULL,
    -- check data type
    ` p_tattoos ` varchar
(
    128
) NOT NULL,


    ` p_created ` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    ` p_modified ` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

-- mock data examples


INSERT INTO ` memberRegister ` (` p_id `, ` p_userName `, ` p_password `, ` p_country `, ` p_state `, ` p_postalZipCode
                                `, ` p_dateOfBirth `, ` p_age `, ` p_raceEthnic `, ` p_email `, ` p_typeRelation `, `
                                p_invitationCode `, ` p_lookingFor `, ` p_bodyType `, ` p_height `, ` p_weight `, `
                                p_eyesColor `, ` p_hairColor `, ` p_hairLength `, ` p_tattoos `, ` p_created `, `
                                p_modified `)
VALUES
('1',
    'Nami Swan',
    'climatack02',
    'East Blue',
    'villa Cocoyasi',
    'A1234 ESB',
    '03/07/1996',
    '22',
    'Asian',
    'nswan@op.com',
    'female looking male',
    '100',
    'Limits',
    'Slim',
    '5´6´´',
    '115 lbs',
    'Amber',
    'Red',
    'Long',
    'Yes', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO ` memberRegister ` (` p_id `, ` p_userName `, ` p_password `, ` p_country `, ` p_state `, ` p_postalZipCode
                                `, ` p_dateOfBirth `, ` p_age `, ` p_raceEthnic `, ` p_email `, ` p_typeRelation `, `
                                p_invitationCode `, ` p_lookingFor `, ` p_bodyType `, ` p_height `, ` p_weight `, `
                                p_eyesColor `, ` p_hairColor `, ` p_hairLength `, ` p_tattoos `, ` p_created `, `
                                p_modified `)
VALUES ('2',
        'Robin Chan',
        'Poneglhy',
        'North Bue',
        'Ohara',
        'h7535 jkl',
        '15/10/1989',
        '22',
        'Caucasian',
        'rchan@op.com',
        'female looking male',
        '100',
        'Anything Goes',
        'Fit',
        '6´6´´',
        '135 lbs',
        'Other',
        'Black',
        'Medium',
        'No', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

