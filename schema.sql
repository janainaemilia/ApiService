-- criando o banco
create database hackathon;
-- usando o banco
use hackathon;

CREATE TABLE IF NOT EXISTS `hackathon`.`CategoriaPost` (
  `idCategoriaPost` INT NOT NULL AUTO_INCREMENT,
  `nomeCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoriaPost`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`Post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`Post` (
  `idPost` INT NOT NULL AUTO_INCREMENT,
  `tituloPost` VARCHAR(100) NOT NULL,
  `textoPost` TEXT NOT NULL,
  `dataPost` DATETIME NOT NULL,
  `atualizacaoPost` DATETIME NULL,
  `idCategoriaPost` INT NOT NULL,
  PRIMARY KEY (`idPost`),
  INDEX `fk_Post_CategoriaPost1_idx` (`idCategoriaPost` ASC),
  CONSTRAINT `fk_Post_CategoriaPost1`
    FOREIGN KEY (`idCategoriaPost`)
    REFERENCES `hackathon`.`CategoriaPost` (`idCategoriaPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`TagPost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`TagPost` (
  `idTagPost` INT NOT NULL AUTO_INCREMENT,
  `nomeTag` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTagPost`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`itemTagPost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`itemTagPost` (
  `idPost` INT NOT NULL,
  `idTagPost` INT NOT NULL,
  PRIMARY KEY (`idPost`, `idTagPost`),
  INDEX `fk_Post_has_TagPost_TagPost1_idx` (`idTagPost` ASC),
  INDEX `fk_Post_has_TagPost_Post1_idx` (`idPost` ASC),
  CONSTRAINT `fk_Post_has_TagPost_Post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `hackathon`.`Post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Post_has_TagPost_TagPost1`
    FOREIGN KEY (`idTagPost`)
    REFERENCES `hackathon`.`TagPost` (`idTagPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `hackathon`.`Midia` (
  `idMidia` INT NOT NULL AUTO_INCREMENT,
  `nomeMidia` VARCHAR(30) NOT NULL,
  `caminhoMidia` VARCHAR(500) NOT NULL,
  `idPost` INT NOT NULL,
  PRIMARY KEY (`idMidia`),
  INDEX `fk_Midia_Post1_idx` (`idPost` ASC),
  CONSTRAINT `fk_Midia_Post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `hackathon`.`Post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
