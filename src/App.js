import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

/* components */
import { Header, Overview, Contagion, Symptomps, Prevention, Statistics } from "./componentmap/index"
/* css */
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container">
          <Switch>
            <Route path="/contagion" component={Contagion} />
            <Route path="/Symptoms" component={Symptomps} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/" component={Overview} />
          </Switch>
        </div>
      </main>
    </Router >
  );
}

export default App;
