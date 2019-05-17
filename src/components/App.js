import React, { Component } from 'react';
import Navbar from './Navbar';
import RecipeItem from './RecipeItem';
import recipes from '../sample_data/recipes.json';
import { NoResults } from './NoResults';

export default class App extends Component {
  state = {
    searchString: '',
    recipes: recipes.results,
  };

  matchWithSearchString = recipe => recipe.title
    .toLowerCase()
    .includes(this.state.searchString.toLowerCase())
    || recipe.ingredients
      .toLowerCase()
      .includes(this.state.searchString.toLowerCase());

  filteredRecipes = () => this.state.recipes
    .filter(recipe => this.matchWithSearchString(recipe))
    .map((recipe, index) => (
      <RecipeItem
        key={index}
        recipe={recipe}
        highlight={this.state.searchString}
      />
    ));

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const recipes = this.filteredRecipes();
    const { searchString } = this.state;
    return (
      <div className="App">
        <Navbar search={searchString} handle={this.handleChange} />
        <div className="container mt-10">
          <div className="row">{recipes}</div>
          {!recipes.length && <NoResults />}
        </div>
      </div>
    );
  }
}
