import React, { Component } from 'react'

class ShowRecipe extends Component {

  render() {
      const { ingredients, description } = this.props.recipe
      return (
        <div className="panel panel-default">
          <div className="panel-body">
            {(ingredients.length > 0) ?
              <ul className="ingredient-list">
                {ingredients.map((ingredient, index) => <li key={index} className="ingredient">{ingredient}</li>)}
              </ul> : <p>no ingredients added 🙁</p>
              
            }
            <p className="recipe-description">{!!description ? description : 'no description yet 🙁'}</p>
          </div>
          <style>{`
            .panel-default {
              margin-top: 20px;
            }

            .panel-body {
              color: #999;
              font-size: 0.8em;
              padding-top: 10px;
            }

            .recipe-description {
              color: #999;
            }

            .ingredient-list {
              padding-left: 0;
            }
            .ingredient { 
              display: inline-block;
              background-color: #77a9c4;
              color: white;
              margin: 5px;
              padding: 2px 8px;
              font-size: 0.8em;
              letter-spacing: 0.076em;
              text-transform: uppercase;
            }
          `}</style>
        </div>
      )

  }
}

export default ShowRecipe