import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CategoryPage from "./containers/CategoryPage";
import Header from "./containers/Header";
import CategoryDetails from "./containers/CategoryDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={CategoryPage} />
          <Route path="/category/:name/:id" component={CategoryDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
