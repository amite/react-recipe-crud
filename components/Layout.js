import React, { Component } from 'react'

import SiteHead from './SiteHead'
import Nav from './Nav'

class Layout extends Component {
  render () {
    return (
      <div>
        <SiteHead title={this.props.title}/>
        <div className="container recipe__container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
        <style>{`
          .recipe__container { 
            
          }
        `}</style>
      </div>
    )
  }
}

export default Layout