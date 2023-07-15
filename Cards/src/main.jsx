import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import image from './assets/profile-pic.png';

const students = [
  {
  name: "Muhammad Ali",
  fathers_name: "Muhammad Aslam",
  Blood_group: "B+",
  roll_no: "Kahuta-2022-25-001",
  image: image,
  id:1
  },
  {
  name: " Ali",
  fathers_name: " Aslam",
  Blood_group: "B+",
  roll_no: "Kahuta-2022-25-001",
  image: image,
  id:2
  },
  {
  name: "Ahmed",
  fathers_name: " Aslam",
  Blood_group: "O-",
  roll_no: "Kahuta-2022-25-001",
  image: image,
  id:3
  }
];
function Card(props) {
  const {name, fathers_name,Blood_group, roll_no,image}=props;
  return (
    <>
      <div className="card">
        <section className="top">
          <div className="top">
            <div className="logo">
              <img src={image} alt="" />
            </div>
            <div className="Title">
              <h5 className="text-center">Kahuta Institute of Technology<br />Student Identity Card</h5>
            </div>
          </div>
        </section>
        <section className="main">
          <div className="left">
            <div className="field">Name:<span className="value">{name}</span></div>
            <div className="field">Father's Name:<span className="value">{fathers_name}</span></div>
            <div className="field">Technology:<span className="value">Computer Information</span></div>
            <div className="field">Session<span className="value">2022-25</span></div>
            <div className="field">Blood Group<span className="value">{Blood_group}</span></div>
            <div className="field">Issue Date<span className="value">01-09-2022</span></div>
            <div className="field">Valid upto: <span className="value">31-08-2025</span></div>
            <span className="value sig sig2"></span>
            <span className="field">Holder</span>
          </div>
          <div className="right">
            <div className="field">R.no:<span className="value">{roll_no}</span></div>
            <div className="img">
              <img src={image} alt="" />
            </div>
            <span className="value sig"></span>
            <span className="field">Principal</span>
          </div>
        </section>
      </div>
    </>
  );
}

function Cardlist() {
const newStudents= students.map((value,index)=>{
    const {name, fathers_name, Blood_group, roll_no,image }=value;
    return( <Card name={name} fathers_name={fathers_name} Blood_group={Blood_group} roll_no={roll_no} image={image} key={index}/>)
  })
  return newStudents;
}
function findO(){
  console.log(
Cardlist().filter((value)=>{
      return value.id==1;
    })
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cardlist />
    <button onClick={findO}>Find O</button>
    
  </React.StrictMode>
);
  
