import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

/* components */
import { Header, Footer, Overview, Contagion, Symptomps, Prevention, Statistics } from "./componentmap/index"
/* css */
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css'
import './css/Footer.css'

function App() {
  return (
    <Router>
      <Header />
      <main>
        <div className="container wrapper">
          <Switch>
            <Route path="/contagion" component={Contagion} />
            <Route path="/Symptoms" component={Symptomps} />
            <Route path="/prevention" component={Prevention} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/" component={Overview} />
          </Switch>
        </div>
      </main>
      <Footer />
    </Router >
  );
}

export default App;
