import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";

class Recipe extends Component {
    render() {
        return (
            <div>
                <header>
                    <h2>Recipe</h2>
                    <h3>{ReactHtmlParser(this.props.name)}</h3>
                </header>
                <section>
                    <label>Time</label>
                    <p>{ReactHtmlParser(this.props.time)}</p>
                    <label>Portions</label>
                    <p>{ReactHtmlParser(this.props.portions)}</p>
                    <label>Difficulty</label>
                    <p>{ReactHtmlParser(this.props.difficulty)}</p>
                </section>
                <section>
                    <h2>Ingredients</h2>
                    {this.props.ingredients.map(recipe => (
                        <p>{ReactHtmlParser(recipe.name)} -
                            <span>
                                {ReactHtmlParser(recipe.amount)}
                                {ReactHtmlParser(recipe.amount_type)}
                            </span>
                        </p>
                    ))}
                </section>
                <section>
                    <h3>Instructions</h3>
                    {this.props.instructions.map(instruction => (
                        <p>{ReactHtmlParser(instruction)}</p>
                    ))}
                </section>
            </div>
        )
    }
}

export default Recipe;