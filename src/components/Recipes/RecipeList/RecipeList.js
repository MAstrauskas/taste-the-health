import React, { Component } from "react";

import Recipe from "../Recipe/Recipe";

class RecipeList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            isError: false
        }
    }

    componentDidMount() {
        this.fetchRecipe();
    }

    fetchRecipe() {
        fetch("http://127.0.0.1:3001/recipes/")
            .then(response => response.json())
            .then(recipes => this.setState({ recipes }))
            .catch(() => this.setState({ isError: true }))
    }

    render() {
        const isError = this.state.isError;
        if (isError) {
            return (
                <div>
                    <h1>Server is down. Sorry for trouble.</h1>
                </div>
            )
        }
        return (
            <div>
                {this.state.recipes.map(recipe => (
                    <Recipe
                        key={recipe.id}
                        id={recipe.id}
                        name={recipe.title}
                        time={recipe.time}
                        portions={recipe.portions}
                        difficulty={recipe.difficulty}
                        ingredients={recipe.ingredients}
                        instructions={recipe.instructions}
                    />
                ))}
            </div>
        )
    }
}

export default RecipeList;