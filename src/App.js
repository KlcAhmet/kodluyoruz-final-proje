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
  return (
    <Router>
      <Header />
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
