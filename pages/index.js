import React, { Component } from 'react'

import Layout from '../components/Layout'
import NewRecipeForm from '../components/NewRecipeForm'
import RecipeList from '../components/RecipeList'
import { Zoom } from 'animate-components';

class RecipeApp extends Component {

  static async getInitialProps({ req }) {
    const recipes = [{
      "recipeName": "Pizza",
      "ingredients": ["Bread", "Brocolli", "Tomato", "Onion", "Mushroom"],
      "description": "Add toppings to dough base and place into oven for 35 minutes on a high heat.\n\nBellissimo!"
    }, {
      "recipeName": "Spaghetti",
      "ingredients": ["Spaghetti", "Sauce", "Tomatoes", "Bacon", "Garlic"],
      "description": "Try not to get it all over your shirt."
    }, {
      "recipeName": "Meatballs",
      "ingredients": ["Minced Beef/Pork", "Onions", "Flour", "Chili Peppers", "Tomatoes", "Seasoning"],
      "description": "Roughly chop onions and mix with minced meat. Add flour for firmness until they hold their own shape. Place into pan on high heat with a brushing of oil until browned. Reduce heat until cooked through"
    }, {
      "recipeName": "Boiled Cabbage",
      "ingredients": ["Cabage", "Water"],
      "description": "Add cabbage to boiling water. Wait. Eat. Delicious - Maybe..."
    }, {
      "recipeName": "🧀 CheeseCake",
      "ingredients": ["Cream Cheese", "Whipping Cream", "Strawberries", "Ginger Snap Biscuits", "Sugar", "Butter"],
      "description": "Crumble the biscuits into a tin and mix with the butter. Heat for a few minutes to form a solid base. Mix the cream cheese and whipping cream until heavy, then apply to top of biscuit base.\n\nAdd strawberries for decoration and leave to rest in fridge for 12 hours."
    }];
    
    return { recipes }
  }

  state = { recipes: this.props.recipes }

  handleCreateRecipe = (recipeName) => {
    let newRecipe = { recipeName, ingredients: [], description: "" }
    let updatedRecipes = this.state.recipes.concat(newRecipe)
    this.setState({ recipes: updatedRecipes })
  }

  render() {
    return (
      <Zoom duration='0.5s' timingFunction='ease-in-out'>
        <Layout title="React CRUD Recipe App">
          <h2 className="app-title">Recipe Book</h2>
          <div className="app col-md-6 col-md-offset-3">
            <NewRecipeForm {...this.props} handleCreateRecipe={this.handleCreateRecipe}  />
            <RecipeList {...this.state} />
          </div>
        </Layout>
      </Zoom>
    )
  }
}

export default RecipeApp
