CREATE TABLE movie (
id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
year YEAR NOT NULL
);

INSERT INTO movie(title, year)
VALUE("Deodpool", 2016),
("X-Men: O filme", 2000),
("Maos Talentosas", 1999);


select * from movie;

select * from `character` ;

CREATE TABLE `character` (
id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
gender ENUM("MALE", "FAMALE", "OTHER"),
description VARCHAR(255) DEFAULT "No description provided"
);

INSERT INTO `character`(name, gender, description)
VALUE("Aurelio", "FAMALE", "Angolano no Brasil");

CREATE TABLE movie_characters(
movie_id INT,
character_id INT,
FOREIGN KEY(movie_id) REFERENCES movie (id),
FOREIGN KEY(character_id) REFERENCES `character` (id)
);


INSERT INTO movie_characters
VALUES 
      (1,2),
      (1,4),
      (2,1),
      (2,2);


SELECT title, name FROM movie_characters
JOIN movie
ON movie_id = movie.id
JOIN `character` 
ON character_id = `character`.id;