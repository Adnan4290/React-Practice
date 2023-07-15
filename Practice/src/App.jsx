
import './App.css'

function App(props) {
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


export default App
