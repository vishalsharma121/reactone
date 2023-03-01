import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null); // now alert in null
  
  const showAlert = (message, type)=>{ // now alert in an object
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';

      setInterval(() => {
        document.title = 'This is my first react app';
      }, 2000);

      setInterval(() => {
        document.title = 'Please check this react app';
      }, 1500);
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#fff';
      showAlert("light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }

return (
      <>
      <Alert alert={alert}/>
      <Navbar title="title" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      {/* <Navbar title="title" mode={mode} /> */}
      {/* <About /> */}
      <TextForm showAlert={showAlert} formHeading="Enter Form Heading Here" mode={mode} />
      
        </>
      );
}

export default App;