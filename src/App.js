import React from 'react';
import './assets/css/App.css';
import Router from './components/Router'; 
import Footer from './components/Footer'; 


function App() {
  return (
    <div className="App" style={{position: "relative"}}>
      <Router />
      <footer className="main-container zi-1030">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
