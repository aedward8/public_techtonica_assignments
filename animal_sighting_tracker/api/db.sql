CREATE TABLE species(
   id SERIAL PRIMARY KEY,
   name VARCHAR,
   scientific_name VARCHAR,
   num_wild INTEGER,
   consv_code INTEGER,
   date TIMESTAMP
);

INSERT INTO species (id, name, scientific_name, num_wild,consv_code,date)
VALUES (DEFAULT,'arctic fox', 'vulpes lagopus', 300,000 'LC','2021-02-15 18:20:14');

INSERT INTO species (id, name, scientific_name, num_wild,consv_code,date)
VALUES (DEFAULT,'bonobos', 'pan paniscus', 10000, 'EN','2021-01-31 05:45:03');

INSERT INTO species (id, name, scientific_name, num_wild,consv_code,date)
VALUES (DEFAULT,'koala', 'Phascolarctos cinereus', 43000, 'VU','2002-04-22 02:17:16');

INSERT INTO species (id, name, scientific_name, num_wild,consv_code,date)
VALUES (DEFAULT,'black rhino', 'diceros bicornis', 4880, 'CR','2003-08-24 08:58:37');

CREATE TABLE individuals(
   id SERIAL PRIMARY KEY,
   nickname VARCHAR,
   species_id INTEGER,
   record_created TIMESTAMP
);

INSERT INTO individuals (id, nickname, species_id, record_created)
VALUES
 (DEFAULT,'Terminator', 2, NOW()), 
 (DEFAULT,'Gordo', 2, NOW()), 
 (DEFAULT,'Hubby', 4, NOW()), 
 (DEFAULT,'Senior', 2, NOW()), 
 (DEFAULT,'Boomhauer', 2, NOW()), 
 (DEFAULT,'Bud', 2, NOW()), 
 (DEFAULT,'Bunny', 1, NOW()), 
 (DEFAULT,'Doobie', 2, NOW()), 
 (DEFAULT,'Green Giant', 2, NOW()), 
 (DEFAULT,'Dreamey', 4, NOW()), 
 (DEFAULT,'Lovey', 3, NOW()), 
 (DEFAULT,'Dorito', 4, NOW()), 
 (DEFAULT,'Shuttershy', 1, NOW()), 
 (DEFAULT,'Sherlock', 3, NOW()), 
 (DEFAULT,'Freak', 1, NOW()), 
 (DEFAULT,'Dingo', 3, NOW()); 


CREATE TABLE sightings(
   id SERIAL PRIMARY KEY,
   sighting_time TIMESTAMP,
   individual_id INTEGER,
   location VARCHAR,
   health BOOLEAN,
   email VARCHAR,
   record_created TIMESTAMP
);

INSERT INTO sightings(id,sighting_time, individual_id, location, health, email, record_created) 
VALUES
(DEFAULT,'2016-06-02 02:10:45', 4, 'Hangzhou,China', false, 'chemisespoon@gmail.com', NOW()), 
(DEFAULT,'2018-06-02 02:10:45', 14, 'Hangzhou,China', true, 'chemisespoon@gmail.com', NOW()), 
(DEFAULT,'2018-11-12 10:50:29', 3, 'Incheon, South Korea', false, 'sauceinfinite@gmail.com', NOW()), 
(DEFAULT,'2015-11-12 10:50:29', 11, 'Incheon, South Korea', true, 'sauceinfinite@gmail.com', NOW()), 
(DEFAULT,'2020-05-28 10:31:16', 12, '27°57N  82°28W', true, 'profiletow@gmail.com', NOW()),
(DEFAULT,'2018-12-03 13:43:23', 7, '55°57N  3°11W', false, 'axereclusive@gmail.com', NOW()), 
(DEFAULT,'2018-03-03 10:27:57', 1, 'Indianapolis, United States', true, 'slobreaction@gmail.com', NOW()), 
(DEFAULT,'2021-01-08 01:30:26', 9, '30°45N  76°47E', false, 'birchlawful@gmail.com', NOW()); 