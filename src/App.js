import React, { useState } from "react";
import "./App.css";
import Navbar1 from "./components/Navbar1";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Routing from "./Routing";
import ScrollToTop from "./ScrollToTop";


function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (

     !loading && (
      <Router>
        <ScrollToTop>
            <Navbar1 />
          <Routing />
          <Footer />
        </ScrollToTop>
      </Router>
     )
      

  );
}

export default App;
