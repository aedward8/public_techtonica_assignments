// Just Javascript Fetch calls
export const getSights = async () => {
  const response = await fetch("http://localhost:9001/sights");
  // converting JSON to JS
  return response.json();
};

export const deleteSight = async (id) => {
  try {
    console.log(id);
    const response = await fetch(`http://localhost:9001/sights/${id}`, {
      method: "DELETE",
    });
    // converting JSON to JS
    //return response.json();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
};

export const addSighting = async (
  sighting_time,
  individual_id,
  location,
  health,
  email
) => {
  try {
    const body = { sighting_time, individual_id, location, health, email };
    const response = await fetch("http://localhost:9001/sights", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body), //  converts JS object to JSON string
    });
    console.log(response);
    //converts from JSON to JS
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
