import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Landing/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
