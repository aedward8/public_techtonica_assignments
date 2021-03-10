INSERT INTO "User" ("User Id", "Name", "Email", "Start Date")
VALUES (4,'Lizzie','Lizzie123@gmail.com','04/05/2021');

INSERT INTO "Photos" ("Photo_id", "User_id", "URL", "Date_Uploaded")
VALUES (6,4,'https://http.cat/444.jpg','04/07/2021');

INSERT INTO "Heart DB" ("Heart Id", "User Id", "Photo_id", "Date_Liked") 
VALUES (2,4,6,'04/09/2021');