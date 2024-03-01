CREATE DATABASE IF NOT EXISTS Movie_Booking;

CREATE TABLE IF NOT EXISTS movies (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    release_date DATE,
    director VARCHAR(100),
    duration_minutes INT,
    rating DECIMAL(3, 1),
    synopsis TEXT,
    poster_url VARCHAR(255)
);

INSERT INTO `movies`(`movie_id`, `title`, `genre`, `release_date`, `director`, `duration_minutes`, `rating`, `synopsis`, `poster_url`) VALUES 
(1, 'Dune', 'Sci-Fi', '2021-10-22', 'Denis Villeneuve', 155, 7.5, 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.', 'https://example.com/dune_poster.jpg'),
(2, 'No Time to Die', 'Action', '2021-09-30', 'Cary Joji Fukunaga', 163, 7.4, 'James Bond has left active service. His peace is short-lived when Felix Leiter, an old friend from the CIA, turns up asking for help, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.', 'https://example.com/no_time_to_die_poster.jpg'),
(3, 'Spider-Man: No Way Home', 'Action', '2021-12-17', 'Jon Watts', 148, 8.5, 'With Spider-Man''s identity now revealed, Peter Parker asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.', 'https://example.com/spiderman_no_way_home_poster.jpg'),
(4, 'The Matrix Resurrections', 'Action', '2021-12-22', 'Lana Wachowski', 148, 5.7, 'Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.', 'https://example.com/matrix_resurrections_poster.jpg'),
(5, 'The Batman', 'Action', '2022-03-04', 'Matt Reeves', 176, NULL, 'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.', 'https://example.com/the_batman_poster.jpg'),
(6, 'Eternals', 'Action', '2021-11-05', 'Chloé Zhao', 157, 6.7, 'The saga of the Eternals, a race of immortal beings who lived on Earth and shaped its history and civilizations.', 'https://example.com/eternals_poster.jpg'),
(7, 'Shang-Chi and the Legend of the Ten Rings', 'Action', '2021-09-03', 'Destin Daniel Cretton', 132, 7.5, 'Shang-Chi, the master of unarmed weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.', 'https://example.com/shangchi_poster.jpg'),
(8, 'Venom: Let There Be Carnage', 'Action', '2021-09-24', 'Andy Serkis', 97, 6.2, 'Eddie Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.', 'https://example.com/venom_let_there_be_carnage_poster.jpg'),
(9, 'Black Widow', 'Action', '2021-07-09', 'Cate Shortland', 134, 6.7, 'Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.', 'https://example.com/black_widow_poster.jpg'),
(10, 'Jungle Cruise', 'Action', '2021-07-30', 'Jaume Collet-Serra', 127, 6.7, 'Based on Disneyland''s theme park ride where a small riverboat takes a group of travelers through a jungle filled with dangerous animals and reptiles but with a supernatural element.', 'https://example.com/jungle_cruise_poster.jpg');