import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import image from './assets/profile-pic.png';
import './App.css';

const st1 = {
  name: "Muhammad Ali",
  fathers_name: "Muhammad Aslam",
  Blood_group: "B+",
  roll_no: "Kahuta-2022-25-001",
  image: image
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name={st1.name} fathers_name={st1.fathers_name} Blood_group={st1.Blood_group} roll_no={st1.roll_no} image={st1.image} />
  </React.StrictMode>
);

