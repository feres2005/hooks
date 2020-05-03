import React, { useState } from "react";

import "./App.css";
import Profile from "./components/profile";

function App() {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [inputDescription, setinputDescription] = useState("");
  const [profiles, setProfiles] = useState([]);

  const submitProfile = (e) => {
    setProfiles([...profiles,{
      name: inputName,
      age: inputAge,
      description: inputDescription,
    }]);
    setInputName("");
    setInputAge("");
    setinputDescription("");
  };
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            border: "5px solid black",
            backgroundColor: "white",
            color: "black",
            width: "25%",
            padding: "25px",
          }}
        >
          <div className="input-container">
            <label>name:</label>
            <input
              value={inputName}
              onChange={(event) => setInputName(event.target.value)}
              placeholder="...tape your name"
            />
          </div>

          <div className="input-container">
            <label>age:</label>
            <input
              value={inputAge}
              onChange={(event) => setInputAge(event.target.value)}
              placeholder="...tape your age"
            />
          </div>

          <div className="input-container">
            <label>description:</label>
            <input
              value={inputDescription}
              onChange={(event) => setinputDescription(event.target.value)}
              placeholder="...tape your description"
            />
          </div>
          <button onClick={submitProfile}>Submit Profile</button>
        </div>
        <div>

          {profiles.map(profile => <Profile name={profile.name} age={profile.age} description={profile.description} />)}

          { <Profile
            name={profiles.name}
            age={profiles.age}
            description={profiles.description}
          /> }
        </div>
      </header>
    </div>
  );
}

export default App;