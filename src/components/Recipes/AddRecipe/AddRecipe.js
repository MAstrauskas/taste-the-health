import React, {  Component } from "react";

class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipeId: 0,
            recipeName: "",
            recipeTime: "",
            recipePortions: "",
            recipeDifficulty: "",
            recipeIngredients: [],
            recipeInstructions: []
        }
    }
    render() {
        return (
            <div>
                <h1>Add a Recipe</h1>
            </div>
        )
    }
}

export default AddRecipe;