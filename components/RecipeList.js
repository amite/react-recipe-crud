import React, { Component } from 'react'

import RecipeEntry from './RecipeEntry'

class RecipeList extends Component {

  render () {
    
    const renderRecipe = (recipe, index) => <RecipeEntry key={index} recipe={recipe} />

    return (
      <div className="recipe-list">
        {this.props.recipes.map(renderRecipe)}
      </div>
    )
  }
}

export default RecipeList