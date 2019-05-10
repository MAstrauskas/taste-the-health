import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import RecipesList from "./components/Recipes/RecipeList/RecipeList";
import AddRecipe from "./components/Recipes/AddRecipe/AddRecipe";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
              Taste The Health
            </Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Recipes
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link">
                    Add Recipe
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <Route path="/" exact component={RecipesList} />
        {/*<Route path="/edit/:id" component={EditRecipe} />*/}
        <Route path="/add" component={AddRecipe} />
      </Router>
    );
  }
}

export default App;
