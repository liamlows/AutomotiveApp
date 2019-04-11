CREATE TABLE `AutomotiveApp`.`users` (
  `u_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE INDEX `u_id_UNIQUE` (`u_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE USER 'manager'@'%' IDENTIFIED BY 'Kent2015';

GRANT ALL PRIVILEGES ON AutomotiveApp.* TO 'manager'@'%';

ALTER USER 'manager'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Kent2015';

FLUSH PRIVILEGES;
