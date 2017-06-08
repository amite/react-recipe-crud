import React, { Component } from 'react'
import { Zoom } from 'animate-components';

import Layout from '../components/Layout'
import NewRecipeForm from '../components/NewRecipeForm'
import RecipeList from '../components/RecipeList'
import { updateRecipe, addRecipe, loadRecipes, removeRecipe } from '../lib/recipeHelpers'

class RecipeApp extends Component {

  state = { recipes: loadRecipes() }

  saveRecipes = (updatedRecipe) => {
    let updatedRecipes = updateRecipe(this.state.recipes, updatedRecipe)
    this.setState({ recipes: updatedRecipes })
  }

  createRecipe = (recipeName) => {
    let newRecipe = { recipeName, ingredients: [], description: "" }
    let updatedRecipes = addRecipe(this.state.recipes, newRecipe)
    this.setState({ recipes: updatedRecipes })
  }

  deleteRecipe = (recipeName) => {
    let updatedRecipes = removeRecipe(this.state.recipes, recipeName)
    this.setState({ recipes: updatedRecipes })    
  }

  render() {
    return (
      <Zoom duration='0.5s' timingFunction='ease-in-out'>
        <Layout title="React CRUD Recipe App">
          <h2 className="app-title">Cook Bhook</h2>
          <div className="app col-md-6 col-md-offset-3">
            <NewRecipeForm createRecipe={this.createRecipe}  />
            <RecipeList {...this.state} deleteRecipe={this.deleteRecipe} saveRecipes={this.saveRecipes} />
          </div>
        </Layout>
      </Zoom>
    )
  }
}

export default RecipeApp
