//import pgp from "pg-promise";
// import pgp library
//const pgp = require("pg-promise")({});
import pgp from "pg-promise";
//Connect to DB
const db = pgp()("postgres://localhost:5432/animal_sighting");
// const db = pgp()({
//   database: "animal_sighting",
//   host: "localhost",
//   port: "5432",
// });

// need to finish this
export const getSights = async () =>
  await db.any(
    `SELECT 
    to_char(s.sighting_time, 'DD Mon YYYY HH12:MI:SS') AS sighting_time,
    s.individual_id,
    individuals.nickname,
    s.location,
    s.health,
    s.email
  FROM sightings as s INNER JOIN individuals ON individuals.id = s.individual_id;`
  );

export const addSight = async (
  sighting_time,
  individual_id,
  location,
  health,
  email
) =>
  (
    await db.any(
      "INSERT INTO sightings (sighting_time, individual_id, location, health, email,record_created) VALUES($1,$2,$3,$4,$5,now()) RETURNING *",
      [sighting_time, individual_id, location, health, email]
    )
  )[0];
// need to look at why [0]
