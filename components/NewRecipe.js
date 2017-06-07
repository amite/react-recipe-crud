import React, { Component } from 'react'

export default class NewRecipe extends Component{
  
  state = { value: "" }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  
  
  render() {
    return(
      <form
        id="add-recipe"
        onSubmit={this.props.onAddRecipe}
        value={this.state.value}
      >
        <div className="input-group add-on">
          <input
            placeholder="Add New Recipe"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control"
            />
            <div className="input-group-btn">
              <input
              type="submit"
              value="+ Add"
              className="form-control btn btn-primary" />
            </div>

        </div>

        <style>{`
          #add-recipe {
            background: rgba(76, 149, 187, 0.74);
            padding: 10px;
            text-align: center;
            min-width: 100%;
            position: absolute;
            left: 0;
            top: 0px;
          }
          #add-recipe input {
            padding: 0 10px;
          }
        `}</style>
      </form>

    )
  }
}