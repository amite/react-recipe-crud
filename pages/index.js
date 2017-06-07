import React, { Component } from 'react'

import Layout from '../components/Layout'
import NewRecipe from '../components/NewRecipe'



class RecipeApp extends Component {
  render() {
    return (
      <Layout>
        <div className="app col-md-6 col-md-offset-3">
          <NewRecipe />
        </div>
        
        <style>{`
          .app {
              transform: translateY(250px);
              background: white;
              min-height: 600px;
              opacity: 0.9;
              box-shadow: 0px 0px 10px 2px rgba(101, 95, 95, 0.84);
          
          }
        `}</style>
      </Layout>
    )
  }
}

export default RecipeApp
