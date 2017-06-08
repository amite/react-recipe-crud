import React, { Component } from 'react'

import ShowRecipe from './ShowRecipe'
import EditRecipe from './EditRecipe'


class RecipeEntry extends Component {

  state = { showEntry: false, showModal: false }

  handleModal = (ev) => {
    ev.preventDefault()
    this.setState({ showModal: !this.state.showModal })
  }

  toggleEntry = (e) => {
    this.setState({ showEntry: !this.state.showEntry })
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
            <a onClick={this.handleModal} href="#"><i className="glyphicon glyphicon-pencil" /></a>
          </h4>

          {this.state.showEntry && <ShowRecipe {...this.props} {...this.state} />}
          {this.state.showModal && <EditRecipe {...this.props} {...this.state} handleModal={this.handleModal} />}

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

          `}</style>
        </div>

    )
  }
}

export default RecipeEntry