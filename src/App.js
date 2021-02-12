import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

/* components */
import { Header, Overview } from "./components/index"
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
          <Route path="/" component={Overview} />
        </Switch>
      </main>
    </Router >
  );
}

export default App;
