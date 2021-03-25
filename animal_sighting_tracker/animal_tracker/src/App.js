import React, { useState, useEffect } from "react";
//import logo from "./logo.svg";
import "./App.css";
import * as apiClient from "./apiClient";

function App() {
  // what data structures is sights?
  const [sights, setSights] = useState([]);

  //API get all sights call
  const loadSights = async () => {
    setSights(await apiClient.getSights());
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    loadSights();
  }, []);
  // [] ensures that we only make one request

  return (
    <div className="App">
      <SightingList sights={sights} />
      <AddSighting loadSights={loadSights} />
    </div>
  );
}

function SightingList({ sights }) {
  return (
    <>
      <h1>Check out all of our Animal Sightings</h1>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sighting Time</th>
              <th>Nickname</th>
              <th>Location</th>
              <th>Healthy</th>
              <th>Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {sights.map(
              ({ id, sighting_time, nickname, location, health, email }) => (
                <tr>
                  {/* <div key={id}> */}
                  <td>{sighting_time}</td>
                  <td>{nickname}</td>
                  <td>{location}</td>
                  <td>{health ? "True" : "False"}</td>
                  <td>{email}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                  {/* </div> */}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      {/* <div className="sighting_list">
        {sights.map(
          ({
            id,
            sighting_time,
            nickname,
            individual_id,
            location,
            health,
            email,
          }) => (
            <div key={id}>
              {sighting_time}, {individual_id},{nickname} {location}, Healthy ?{" "}
              {health ? "True" : "False"}, {email},{" "}
            </div>
          )
        )}
      </div> */}
    </>
  );
}

function AddSighting({ loadSights }) {
  const [sighting_time, setSighting_time] = React.useState("");
  const [individual_id, setIndividual_id] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [health, setHealth] = React.useState("");
  const [email, setEmail] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    await apiClient.addSighting(
      sighting_time,
      individual_id,
      location,
      health,
      email
    );
    // refresh - with new list of sightings populated
    loadSights();
  };

  return (
    <div>
      <h1>Add an Animal Sighting Here!</h1>
      <form onSubmit={onSubmit}>
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Sighting Time:{" "}
            <input
              type="text"
              value={sighting_time}
              onChange={(e) => setSighting_time(e.currentTarget.value)}
            />
          </label>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Individual_id:{" "}
            <input
              type="text"
              value={individual_id}
              onChange={(e) => setIndividual_id(e.currentTarget.value)}
            />
          </label>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Location:{" "}
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          </label>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Healthy:{" "}
            <input
              type="text"
              value={health}
              onChange={(e) => {
                setHealth(e.target.value);
              }}
            />
          </label>
        </div>
        <div style={{ paddingBottom: "20px" }}>
          <label>
            Sighter's Email:{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
