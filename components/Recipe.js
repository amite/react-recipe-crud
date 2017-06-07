import React, { Component } from 'react'

class Recipe extends Component {
  render () {
    return (
      <div className="list-group-item recipe-item">
        <h4 className="list-group-item-heading recipeHeading">
          <i className="glyphicon glyphicon-plus" />&nbsp;&nbsp;
          {this.props.recipe.recipeName}
          <a href="#"><i className="glyphicon glyphicon-pencil" /></a>
        </h4>

      </div>
    )
  }
}

export default Recipe