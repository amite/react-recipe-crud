import React, { Component } from 'react'

import EditModal from './EditModal'

class RecipeEntry extends Component {

  state = { showEntry: false, showModal: false }

  handleModal = (ev) => {
    ev.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  render() {
    const { recipeName, description, ingredients } = this.props.recipe

    return (

      <div>
        <div className="list-group-item recipe-item">
          <h4 className="list-group-item-heading recipeHeading">
            <i className="glyphicon glyphicon-plus" />&nbsp;&nbsp;
            {recipeName}
            <a onClick={this.handleModal} href="#"><i className="glyphicon glyphicon-pencil" /></a>
          </h4>
          {this.state.showModal &&
            <EditModal>
              <h2>{recipeName}</h2>
              <div className="form-group pmd-textfield">
                <label htmlFor="regular1" className="control-label">
                  Ingredients
                </label>
                <input type="text" id="regular1" defaultValue={ingredients.join(", ")} className="form-control small-text" />
              </div>
              <div className="form-group pmd-textfield">
                <label htmlFor="regular1" className="control-label">
                  Description
                </label>

                <textarea type="text" id="regular1" defaultValue={description} className="form-control large-ta">
                </textarea>
              </div>
              <button className="close-btn btn btn-warning btn-lg" onClick={this.handleModal}>close</button>
            </EditModal>
          }
          <style>{`

            .recipe-item {
              margin-bottom: 15px !important;
              min-height: 30px;
              background: rgb(255, 193, 7);
              color: white;
              border-radius: 0 !important;
              box-shadow: 0px 3px 0px 1px #dba915;
              border: none;
            }

            .recipe-item:active {
              position: relative;
              top: 2px;
            }

            .glyphicon-pencil {
              float: right;
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
            .close-btn {
              position: absolute;
              right: 20px;
              bottom: 15px;
              padding: 5px 45px;
            }
          `}</style>
        </div>
      </div>

    )
  }
}

export default RecipeEntry