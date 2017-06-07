import React, { Component } from 'react'

import Recipe from './Recipe'

class RecipeList extends Component {

  render () {
    
    const renderRecipe = (recipe, index) => <Recipe recipe={recipe} />

    return (
      <div className="recipe-list">
        {this.props.recipes.map(renderRecipe)}

        <style>{`
          .recipe-list { 
            margin-top: 80px;
          }
        `}</style>
      </div>
    )
  }
}

export default RecipeList