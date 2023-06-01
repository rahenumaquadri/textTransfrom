import React, { useState } from 'react'
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import Textfrom from './components/Textfrom';
import {
  BrowserRouter as Router,
  Routes,
  Route
}
  from "react-router-dom";



const App = () => {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
  }

  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#262590';
      showAlert(" Dark mode has been enable", 'success');
      //document.title = ' Textutil-Dark Mode';

    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" light mode has been enable", 'success');
      //document.title = ' Textutil-light Mode';
    }
  }

  return (
    <>
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Textfrom showAlert={showAlert} heading=' Try Text-transfrom word counter, character counter, Remove extra spaces' mode={mode} />} />
            <Route path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router>



    </>
  )
}

export default App
