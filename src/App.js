import React from 'react';
import './App.css';


const sofaImage = 'https://img.freepik.com/free-psd/two-seater-gray-sofa-with-two-cushions-isolated_176382-98.jpg?t=st=1720381198~exp=1720384798~hmac=b5d6dd5f0366931700a9ba840300d736debde534d120324f19011dc52d1aa4ad&w=1380';


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="left-side">
          <div className="text-list">
            <p><span role="img" aria-label="link">🔗</span>&nbsp;CAPSULE&nbsp;&nbsp;SOFA&nbsp;&nbsp;TABLE&nbsp;&nbsp;CHAIR</p>
          </div>
          <div>
            <p className="product-title">Sofa</p>
            <p className="product-description grey-text">Brown</p>
           
            <p><strong>Pasadena Sofa</strong></p>
            <p>Two USB ports bring the sofa into the 21st</p>
            <p>century allowing you to easily charge your phone</p>
            <p>and tablet while you relax.</p>
            <div className="button-container">
              <div className="white-button">$399</div>
              <div className="black-button">Pay for</div>
            </div>
            <div className="social-icons">
              <span role="img" aria-label="google">🔍</span>
              <span role="img" aria-label="twitter">🐦</span>
              <span role="img" aria-label="facebook">📘</span>
            </div>
          </div>
        </div>
        <div className="right-side">
          <div className="search-container">
            <span>Search </span><span role="img" aria-label="search">🔍</span>
          </div>
          <div className="cream-container">
            <div className="grey-container">
            <p className="grey-text">CAPSULE</p>
              <img src={sofaImage} alt="Sofa" />
              <div className="love-emoji">&#x1F497;</div>
            </div>
            <p>2m / 2.4m / 2.7m / 3.2m</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
