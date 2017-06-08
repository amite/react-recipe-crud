import React, { Component } from 'react'

import EditModal from './EditModal'

class EditRecipe extends Component {


  render() {
    const { recipeName, ingredients, description } = this.props.recipe

    return (
      <EditModal>
        <h2>{recipeName}</h2>
        <div className="form-group pmd-textfield">
          <label htmlFor="regular1" className="control-label">
            Ingredients
            </label>
          <input type="text" placeholder="Add a comma separated list of ingredients" id="regular1" defaultValue={ingredients.join(", ")} className="form-control small-text" />
        </div>
        <div className="form-group pmd-textfield">
          <label htmlFor="regular1" className="control-label">
            Description
            </label>

          <textarea type="text" id="regular1" placeholder="Add a nice description" defaultValue={description} className="form-control large-ta">
          </textarea>
        </div>
        <button className="close-btn btn btn-warning btn-lg" onClick={this.props.handleModal}>close</button>
        <style>{`
          .close-btn {
            position: absolute;
            right: 20px;
            bottom: 15px;
            padding: 5px 45px;
          }
            `}
       </style>
      </EditModal>
    )
  }
}

export default EditRecipe