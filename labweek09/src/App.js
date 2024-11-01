import React, { useState } from 'react';
import './App.css';

function App() {
  // Define state for the custom information
  const [info] = useState({
    title: 'Welcome to Lab Week 09',
    description: 'This is a React app setup example for COMP 3123.',
    author: 'Karan Parmar',
    course: 'COMP 3123 - Full Stack Development I',
    lab: 'Lab Week 09 - React JS Setup',
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* Displaying the custom information */}
        <h1>{info.title}</h1>
        <p>{info.description}</p>
        <p>Author: {info.author}</p>
        <p>Course: {info.course}</p>
        <p>Lab: {info.lab}</p>
        {/* Remove the logo and the link to "Learn React" */}
      </header>
    </div>
  );
}

export default App;
