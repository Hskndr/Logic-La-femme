-- src https://medium.com/ramsatt/angular-7-crud-part-2-web-api-preparation-4954acfbd09d
--
-- Table structure for table `memberRegister`
--
--
CREATE TABLE IF NOT EXISTS `memberRegister` (
    `p_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `p_name` varchar(128) NOT NULL,
    `p_email` text NOT NULL,
    `p_password` text NOT NULL,
    `p_typeRelation` varchar(128) NOT NULL,
    `p_invitationCode` int NOT NULL,
    `p_country` varchar(128) NOT NULL,
    `p_state` varchar(128) NOT NULL,
    `p_postalZipCode` varchar(128) NOT NULL,
    `p_dateOfBirth` varchar(128) NOT NULL,
    `p_age` int NOT NULL,
    `p_zodiacSign` varchar(128) NOT NULL,
    `p_raceEthnic` varchar(128) NOT NULL,
    `p_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `p_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

INSERT INTO `memberRegister` (`p_id`, `p_name`, `p_email`, `p_password`,`p_typeRelation`,`p_invitationCode`,`p_country`, `p_state`,`p_postalZipCode`,`p_dateOfBirth`,`p_age`,`p_zodiacSign`,`p_raceEthnic`) VALUES
    (1, 'Robin Chan', 'robin@onepiece.com', 'poneghly','looking males',100,'East Blue','Ohara','c 1234 a','11-11-11',20,'aries','asian'),
    (2, 'Monkey D Luffy', 'luffy@onepiece.com','gearSecond','looking females',100,'East Blue','island','c 1234 a','11-11-11',22,'aries','asian'),
    (3, 'Nami Swan', 'nami@onepiece.com.', 'worldMap','looking males',100,'East Blue','cocovillage','c 1234 a','11-11-11',19,'aries','asian'),
    (4, 'Zoro Roronoa', 'zoro@onepiece.com', 'santoryu','looking females',100,'East Blue','swordtown','c 1234 a','11-11-11',24,'aries','asian');
