import React, { Component } from 'react'


class Recipe extends Component {

  state = { showEntry: false, showModal: false }

  handleModal = (ev) => {
    ev.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
    return (
      <div>
        <div className="list-group-item recipe-item">
          <h4 className="list-group-item-heading recipeHeading">
            <i className="glyphicon glyphicon-plus" />&nbsp;&nbsp;
            {this.props.recipe.recipeName}
            <a onClick={this.handleModal} href="#"><i className="glyphicon glyphicon-pencil" /></a>
          </h4>
        </div>
      </div>
    )
  }
}

export default Recipe