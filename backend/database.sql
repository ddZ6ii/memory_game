-- _____________________________________________ CREATE TABLES _____________________________________________
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `is_admin` TINYINT NOT NULL DEFAULT 0
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `preference`;
CREATE TABLE `preference` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `font_family` TINYINT UNSIGNED DEFAULT 1,
    `card_cover` TINYINT UNSIGNED DEFAULT 1
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `mode` TINYINT UNSIGNED DEFAULT 1,
    `is_multiplayer` TINYINT UNSIGNED DEFAULT 1,
    `grid_size` TINYINT UNSIGNED DEFAULT 1
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `pseudo` VARCHAR(150) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `preference_id` INT DEFAULT NULL,
    CONSTRAINT fk_user_preference FOREIGN KEY (`preference_id`)
        REFERENCES `preference` (`id`),
    `role_id` INT DEFAULT 1,
    CONSTRAINT fk_user_role FOREIGN KEY (`role_id`)
        REFERENCES `role` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `user_game`;
CREATE TABLE `user_game` (
    `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    `time` INT UNSIGNED NOT NULL,
    `move` INT UNSIGNED NOT NULL,
    `score` INT UNSIGNED NOT NULL,
    `user_id` INT DEFAULT NULL,
    CONSTRAINT fk_user_game FOREIGN KEY (`user_id`)
        REFERENCES `user` (`id`),
    `game_id` INT DEFAULT 1,
    CONSTRAINT fk_game_user FOREIGN KEY (`game_id`)
        REFERENCES `game` (`id`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

-- _____________________________________________ POPULATE TABLES _____________________________________________
-- Populate role
INSERT INTO `role` (`is_admin`) 
VALUES
(0),
(1);

-- Populate preference
INSERT INTO `preference` (`font_family`, `card_cover`) 
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3);

-- Populate game
INSERT INTO `game` (`mode`, `is_multiplayer`, `grid_size`) 
VALUES
(1, 1, 1);

-- Populate user
INSERT INTO `user` (`pseudo`, `email`, `password`, `preference_id`, `role_id`) 
VALUES
('biquet', 'biquet@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$Ut9+nRPpva3yBxWNtLYZZw$kp1hHPSeGNKOQwRhtzD6w6eu8KqccIlQyvu8WT98u/I', 1, 1);

-- Populate user_game
INSERT INTO `user_game` (`time`, `move`, `score`, `user_id`, `game_id`) 
VALUES
(23, 6, 500, 1, 1),
(35, 11, 220, 1, 1);