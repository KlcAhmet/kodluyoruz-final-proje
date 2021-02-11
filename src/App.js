import React, { useState, useEffect } from "react"
import axios from "axios"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

/* componenet */
import Header from "./components/Header"
/* css */
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {

  const [headerLinks, setHeaderLinks] = useState([])


  useEffect(() => {
    axios.get('http://localhost:3004/headerLinks')
      .then(function ({ data }) {
        setHeaderLinks(data)
      })
      .catch(function (error) {
        console.log("Hata")
        console.log(error)
      })
  }, [])

  return (
    <Router>
      <Header links={headerLinks} />

      <main>
        <Switch>
          <Route path="/contagion" />
          <Route path="/Symptoms" />
          <Route path="/prevention" />
          <Route path="/">
          </Route>
        </Switch>
      </main>

    </Router >
  );
}

export default App;
