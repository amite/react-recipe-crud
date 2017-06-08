import React, { Component } from 'react'

import Modal from './Modal'

class EditRecipe extends Component {

  state = { showModal: true, ingredients: this.props.recipe.ingredients.join(", "), description: this.props.recipe.description }

  handleChange = (ev) => {
    this.setState({
      [ev.target.name]: ev.target.value
    })
  }

  handleFormSave = (ev) => {
    ev.preventDefault()
    let updatedRecipe = { 
      recipeName: this.props.recipe.recipeName,
      description: this.state.description,
      ingredients: this.state.ingredients.length > 0 ? this.state.ingredients.split(', ') : ""
    }
    // console.log('updating..', updatedRecipe)
    this.props.saveRecipes(updatedRecipe)
    this.props.toggleEditing()
    this.handleModal()
  }

  handleModal = (ev) => {
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { recipeName, ingredients, description } = this.props.recipe

    return (
      this.state.showModal && <Modal>
        <h2>{recipeName}</h2>
        <form onSubmit={this.handleFormSave}>
          <div className="form-group pmd-textfield">
            <label htmlFor="regular1" className="control-label">
              Ingredients
            </label>
            <input name="ingredients" onChange={this.handleChange} type="text" placeholder="Add a comma separated list of ingredients" id="regular1" defaultValue={this.state.ingredients} className="form-control small-text" />
          </div>
          <div className="form-group pmd-textfield">
            <label htmlFor="regular1" className="control-label">
              Description
            </label>

            <textarea name="description" onChange={this.handleChange} type="text" id="regular1" placeholder="Add a nice description" defaultValue={this.state.description} className="form-control large-ta">
            </textarea>
          </div>
          <button className="close-btn btn btn-warning btn-lg" onClick={this.handleFormSave}>save</button>
        </form>
        <style>{`
          .close-btn {
            position: absolute;
            right: 20px;
            bottom: 15px;
            padding: 5px 45px;
          }
            `}
        </style>
      </Modal>
    )
  }
}

export default EditRecipe