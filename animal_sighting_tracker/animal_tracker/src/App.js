import React, { useState } from "react";
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

  React.useEffect(() => {
    // Anything in here is fired on component mount.
    loadSights();
  }, []);

  return (
    <div className="App">
      <SightingList sights={sights} />
      <AddSighting loadSights={loadSights} />
    </div>
  );
}

function SightingList({ sights }) {
  return (
    <div className="sighting_list">
      <h1>Check out all of our Animal Sightings</h1>
      {sights.map(
        ({
          id,
          sighting_time,
          individual_id,
          location,
          health,
          email,
          record_created,
        }) => (
          <div key={id}>
            {sighting_time}, {individual_id}, {location}, {health}, {email},{" "}
            {record_created}
          </div>
        )
      )}
    </div>
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
