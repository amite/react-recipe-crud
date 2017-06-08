import React, { Component } from 'react'

import ShowRecipe from './ShowRecipe'
import EditRecipe from './EditRecipe'


class RecipeEntry extends Component {

  state = { isEditing: false, showEntry: false }

  toggleEntry = (e) => {
    this.setState({ showEntry: !this.state.showEntry })
  }

  toggleEditing = (e) => {
    this.setState({ isEditing: !this.state.isEditing })    
  }

  handleRemoveRecipe = (ev) => {
    ev.preventDefault()
    this.props.deleteRecipe(this.props.recipe.recipeName)
  }

  render() {
    const { recipeName, description, ingredients } = this.props.recipe

    return (
        <div className="list-group-item recipe-item">
          <h4 className="list-group-item-heading recipeHeading">
            <i onClick={this.toggleEntry}
              className={
                `glyphicon ${this.state.showEntry ?
                "glyphicon-minus" :
                "glyphicon-plus"}`
              } />&nbsp;&nbsp;
            {recipeName}
            <a onClick={this.handleRemoveRecipe} href="#"><i className="glyphicon glyphicon-remove" /></a>            
            <a onClick={this.toggleEditing} href="#"><i className="glyphicon glyphicon-pencil" /></a>
          </h4>

          {this.state.showEntry && <ShowRecipe {...this.props} {...this.state} />}
          {this.state.isEditing && <EditRecipe {...this.props} {...this.state} toggleEditing={this.toggleEditing} />}
        </div>
    )
  }
}

export default RecipeEntry