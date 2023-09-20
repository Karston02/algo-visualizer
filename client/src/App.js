// Import necessary modules from React and Axios
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define a functional component called 'App'
function App() {
  // Define a state variable 'member' using the 'useState' hook
  const [member, setMember] = useState({});

  // Use the 'useEffect' hook to perform side effects in the component
  useEffect(() => {
    // Inside the 'useEffect' hook:
    // Make a GET request to your Flask backend using Axios
    axios.get('/api/members')
      // Handle the successful response from the backend
      .then(response => {
        // Update the 'member' state with the data received from the backend
        setMember(response.data);
      })
      // Handle errors that might occur during the request
      .catch(error => {
        // Log the error to the console for debugging purposes
        console.error('Error:', error);
      });
  }, []); // The empty dependency array [] ensures that this effect runs once, like componentDidMount in class components

  // Render the component's UI
  return (
    <div>
      {/* Display a heading */}
      <h1>Random Member</h1>
      {/* Display the 'id', 'name', and 'age' properties of the 'member' state */}
      <p>ID: {member.id}</p>
      <p>Name: {member.name}</p>
      <p>Age: {member.age}</p>
    </div>
  );
}

// Export the 'App' component as the default export
export default App;
