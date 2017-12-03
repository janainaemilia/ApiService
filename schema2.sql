-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema hackathon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `hackathon` DEFAULT CHARACTER SET latin1 ;
USE `hackathon` ;

-- -----------------------------------------------------
-- Table `hackathon`.`categoriapost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`categoriapost` (
  `idCategoriaPost` INT(11) NOT NULL AUTO_INCREMENT,
  `nomeCategoria` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategoriaPost`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hackathon`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(45) CHARACTER SET 'macce' NOT NULL,
  PRIMARY KEY (`idusuario`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `hackathon`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`post` (
  `idPost` INT(11) NOT NULL AUTO_INCREMENT,
  `tituloPost` VARCHAR(100) NOT NULL,
  `textoPost` TEXT NOT NULL,
  `dataPost` DATETIME NOT NULL,
  `atualizacaoPost` DATETIME NULL DEFAULT NULL,
  `idCategoriaPost` INT(11) NOT NULL,
  `usuario_idusuario` INT NOT NULL,
  PRIMARY KEY (`idPost`),
  INDEX `fk_Post_CategoriaPost1_idx` (`idCategoriaPost` ASC),
  INDEX `fk_post_usuario1_idx` (`usuario_idusuario` ASC),
  CONSTRAINT `fk_Post_CategoriaPost1`
    FOREIGN KEY (`idCategoriaPost`)
    REFERENCES `hackathon`.`categoriapost` (`idCategoriaPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_usuario1`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `hackathon`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hackathon`.`tagpost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`tagpost` (
  `idTagPost` INT(11) NOT NULL AUTO_INCREMENT,
  `nomeTag` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idTagPost`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hackathon`.`itemtagpost`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`itemtagpost` (
  `idPost` INT(11) NOT NULL,
  `idTagPost` INT(11) NOT NULL,
  PRIMARY KEY (`idPost`, `idTagPost`),
  INDEX `fk_Post_has_TagPost_TagPost1_idx` (`idTagPost` ASC),
  INDEX `fk_Post_has_TagPost_Post1_idx` (`idPost` ASC),
  CONSTRAINT `fk_Post_has_TagPost_Post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `hackathon`.`post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Post_has_TagPost_TagPost1`
    FOREIGN KEY (`idTagPost`)
    REFERENCES `hackathon`.`tagpost` (`idTagPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `hackathon`.`midia`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `hackathon`.`midia` (
  `idMidia` INT(11) NOT NULL AUTO_INCREMENT,
  `nomeMidia` VARCHAR(30) NOT NULL,
  `caminhoMidia` VARCHAR(500) NOT NULL,
  `idPost` INT(11) NOT NULL,
  PRIMARY KEY (`idMidia`),
  INDEX `fk_Midia_Post1_idx` (`idPost` ASC),
  CONSTRAINT `fk_Midia_Post1`
    FOREIGN KEY (`idPost`)
    REFERENCES `hackathon`.`post` (`idPost`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
