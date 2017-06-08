import React, { Component } from 'react'

import RecipeEntry from './RecipeEntry'

class RecipeList extends Component {

  render () {
    
    const renderRecipe = (recipe, index) => <RecipeEntry key={index} {...this.props} recipe={recipe} />

    return (
      <div className="recipe-list">
        {this.props.recipes.map(renderRecipe)}
          <style>{`
            .recipe-item {
              margin-bottom: 15px !important;
              min-height: 30px;
              background: rgb(255, 193, 7);
              color: white;
              border-radius: 2px !important;
              box-shadow: 0px 3px 0px 1px #dba915;
              border: none;
            }

            .glyphicon-pencil, .glyphicon-remove {
              float: right;
              margin-left: 20px;
              color: white;
            }
            .recipeHeading {
              font-size: 1em;
            }
            .large-ta {
              height: 110px !important;
            }
            .small-text {
              padding-top: 8px !important;
              font-size: 12px !important;
              letter-spacing: 0.05em;
              color: #f0ad4e;
              text-transform: uppercase;
            }

          `}</style>
      </div>
    )
  }
}

export default RecipeList