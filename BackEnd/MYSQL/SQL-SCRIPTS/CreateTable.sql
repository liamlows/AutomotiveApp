CREATE TABLE `AutomotiveApp`.`users` (
  `u_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `shop_fav` VARCHAR(45) NULL,
  `shop_num` VARCHAR(45) NULL,
  `Insurance_phone` VARCHAR(45) NULL,
  `Insurance_num` VARCHAR(45) NULL,
  `insurance_company` VARCHAR(45) NULL,
  `insurance_email` VARCHAR (45) NULL,
  PRIMARY KEY (`u_id`),
  UNIQUE INDEX `u_id_UNIQUE` (`u_id` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

CREATE TABLE `AutomotiveApp`.`vehicles` (
  `c_id` INT NOT NULL,
  `u_id` INT NOT NULL,
  `MAKE` VARCHAR(45) NULL,
  `MODEL` VARCHAR(45) NULL,
  `YEAR` VARCHAR(45) NULL,
  `avg_mileage` INT NULL,
  `current_mileage` INT NULL,
  PRIMARY KEY (`c_id`),
  UNIQUE INDEX `c_id_UNIQUE` (`c_id` ASC) VISIBLE,
  INDEX `u_id_idx` (`u_id` ASC) VISIBLE,
  CONSTRAINT `u_id`
    FOREIGN KEY (`u_id`)
    REFERENCES `AutomotiveApp`.`users` (`u_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE TABLE `AutomotiveApp`.`Maintainance` (
  `m_id` INT NOT NULL,
  `c_id` INT NULL,
  `type` VARCHAR(45) NULL,
  `last_mileage` VARCHAR(45) NULL,
  `date_serviced` VARCHAR(45) NULL,
  `cost` VARCHAR(45) NULL,
  `description` VARCHAR(255) NULL,
  PRIMARY KEY (`m_id`),
  INDEX `c_id_idx` (`c_id` ASC) VISIBLE,
  CONSTRAINT `c_id`
    FOREIGN KEY (`c_id`)
    REFERENCES `AutomotiveApp`.`vehicles` (`c_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE USER 'manager'@'%' IDENTIFIED BY 'Kent2015';

GRANT ALL PRIVILEGES ON AutomotiveApp.* TO 'manager'@'%';

ALTER USER 'manager'@'%' IDENTIFIED WITH MYSQL_NATIVE_PASSWORD BY 'Kent2015';

FLUSH PRIVILEGES;
