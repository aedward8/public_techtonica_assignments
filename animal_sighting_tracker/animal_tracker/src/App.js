import React, { useState, useEffect } from "react";
import animal from "./Animal.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import * as apiClient from "./apiClient";
import { Button, Form } from "react-bootstrap";

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
    <>
      <div className="App">
        <header className="App-header">
          <img src={animal} className="App-logo" alt="animals" />
        </header>
        <SightingList sights={sights} loadSights={loadSights} />
        <AddSighting loadSights={loadSights} />
      </div>
    </>
  );
}

function SightingList({ sights, loadSights }) {
  // delete sighting function
  const deleteSighting = async (id) => {
    // create a delete fetch request
    await apiClient.deleteSight(id);
    loadSights();
  };

  return (
    <>
      <div className="animalList">
        <h1>Check out all of our Animal Sightings!</h1>
        <h2>
          &#128011;&#128018;&#128024;&#128005;&#128034;&#128040;&#128043;&#128047;&#128060;&#128051;&#128006;&#128033;&#129426;
        </h2>
        <div>
          <div className="table-wrapper-scroll-y my-custom-scrollbar">
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
                  ({
                    id,
                    sighting_time,
                    nickname,
                    location,
                    health,
                    email,
                  }) => (
                    <tr key={id}>
                      <td>{sighting_time}</td>
                      <td>{nickname}</td>
                      <td>{location}</td>
                      <td>{health ? "True" : "False"}</td>
                      <td>{email}</td>
                      <td>Edit</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteSighting(id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    // reset form fields -> a bit clunky but it works!
    setSighting_time("");
    setIndividual_id("");
    setLocation("");
    setHealth("");
    setEmail("");
  };

  return (
    <div>
      <br />
      <h1>Add an Animal Sighting Here!</h1>
      <div className="form">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Sighting Time</Form.Label>
            <Form.Control
              type="text"
              value={sighting_time}
              onChange={(e) => setSighting_time(e.currentTarget.value)}
              placeholder="YYYY-MM-DD 00:00:00"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Individual Id</Form.Label>
            <Form.Control
              type="text"
              value={individual_id}
              onChange={(e) => setIndividual_id(e.currentTarget.value)}
              placeholder="i.e 1,2,3"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
              placeholder="Yosemite, California"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Healthy</Form.Label>
            <Form.Control
              type="text"
              value={health}
              onChange={(e) => {
                setHealth(e.target.value);
              }}
              placeholder="True or False"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Sighter's Email</Form.Label>
            <Form.Control
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="YourAwesomeEmail@mail.com"
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/* <form onSubmit={onSubmit}>
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
      </form> */}
    </div>
  );
}

export default App;
