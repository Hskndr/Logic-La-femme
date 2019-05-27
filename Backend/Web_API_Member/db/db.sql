--
-- Table structure for table `members`
--
CREATE TABLE IF NOT EXISTS `members` (
  `p_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `p_name` varchar(128) NOT NULL,
  `p_email` text NOT NULL,
  `p_password` text NOT NULL,
  `p_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `p_modified` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

INSERT INTO `members` (`p_id`, `p_name`, `p_email`, `p_password`) VALUES
  (1, 'Robin Chan', 'robin@onepiece.com', 'poneghly'),
  (2, 'Monkey D Luffy', 'luffy@onepiece.com','gearSecond'),
  (3, 'Nami Swan', 'nami@onepiece.com.', 'worldMap'),
  (4, 'Zoro Roronoa', 'zoro@onepiececom', 'santoryu');
