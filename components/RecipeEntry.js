import React, { Component } from 'react'

import EditModal from './EditModal'

class RecipeEntry extends Component {

  state = { showEntry: false, showModal: false }

  handleModal = (ev) => {
    ev.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  render () {
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
                  Description
                </label>
                <textarea type="text" id="regular1" defaultValue={description} className="form-control large-ta">
                </textarea>
              </div>
              <button className="close-btn btn btn-warning btn-lg" onClick={this.handleModal}>close</button>
            </EditModal>
          }
          <style>{`
            .app {
              padding-top:80px;
              transform: translateY(200px);
              background: white;
              min-height: 600px;
              opacity: 0.92;
              box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);
            }
            .bkg {
              background: rgba(0, 0, 0, 0.45);
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
            }
            .recipeHeading {
              font-size: 1em;
            }
            .large-ta {
              height: 110px !important;
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