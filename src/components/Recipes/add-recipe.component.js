import React, { Component } from "react";

export default class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.onChangeRecipeName = this.onChangeRecipeName.bind(this);
    this.onChangeRecipePortions = this.onChangeRecipePortions.bind(this);
    this.onChangeRecipeDifficulty = this.onChangeRecipeDifficulty.bind(this);
    this.onChangeRecipeTime = this.onChangeRecipeTime.bind(this);
    this.onChangeRecipeIngridients = this.onChangeRecipeIngridients.bind(this);
    this.onChangeRecipeInstructions = this.onChangeRecipeInstructions.bind(
      this
    );
    this.onChangeRecipeTips = this.onChangeRecipeTips.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      recipe_name: "",
      recipe_portions: "",
      recipe_difficulty: "",
      recipe_time: "",
      recipe_ingridients: "",
      recipe_instructions: "",
      recipe_tips: ""
    };
  }

  onChangeRecipeName(e) {
    this.setState({
      recipe_name: e.target.value
    });
  }

  onChangeRecipePortions(e) {
    this.setState({
      recipe_portions: e.target.value
    });
  }

  onChangeRecipeDifficulty(e) {
    this.setState({
      recipe_difficulty: e.target.value
    });
  }

  onChangeRecipeTime(e) {
    this.setState({
      recipe_time: e.target.value
    });
  }

  onChangeRecipeIngridients(e) {
    this.setState({
      recipe_ingridients: e.target.value
    });
  }

  onChangeRecipeInstructions(e) {
    this.setState({
      recipe_instructions: e.target.value
    });
  }

  onChangeRecipeTips(e) {
    this.setState({
      recipe_tips: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Recipe Submitted:`);
    console.log(`Recipe Name: ${this.state.recipe_name}`);
    console.log(`Recipe Portions: ${this.state.recipe_portions}`);
    console.log(`Recipe Difficulty: ${this.state.recipe_difficulty}`);
    console.log(`Recipe Time: ${this.state.recipe_time}`);
    console.log(`Recipe Ingridients: ${this.state.recipe_ingridients}`);
    console.log(`Recipe Instructions: ${this.state.recipe_instructions}`);
    console.log(`Recipe Tips: ${this.state.recipe_tips}`);

    this.setState({
      recipe_name: "",
      recipe_portions: "",
      recipe_difficulty: "",
      recipe_time: "",
      recipe_ingridients: "",
      recipe_instructions: "",
      recipe_tips: ""
    });
  }

  render() {
    return (
      <div style={{ marginTop: 10 }} className="container">
        <h3>Add New Recipe</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Recipe Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_name}
              onChange={this.onChangeRecipeName}
            />
          </div>
          <div className="form-group">
            <label>Recipe Portions: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_portions}
              onChange={this.onChangeRecipePortions}
            />
          </div>
          <div className="form-group">
            <label>Recipe Difficulty: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_difficulty}
              onChange={this.onChangeRecipeDifficulty}
            />
          </div>
          <div className="form-group">
            <label>Recipe Time: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_time}
              onChange={this.onChangeRecipeTime}
            />
          </div>
          <div className="form-group">
            <label>Recipe Ingridients: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_ingridients}
              onChange={this.onChangeRecipeIngridients}
            />
          </div>
          <div className="form-group">
            <label>Recipe Instructions: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_instructions}
              onChange={this.onChangeRecipeInstructions}
            />
          </div>
          <div className="form-group">
            <label>Recipe Tips: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.recipe_tips}
              onChange={this.onChangeRecipeTips}
            />
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Add Recipe"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
