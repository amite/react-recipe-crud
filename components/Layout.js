import React, { Component } from 'react'

import SiteHead from './SiteHead'
import Nav from './Nav'

class Layout extends Component {
  render () {
    return (
      <div>
        <SiteHead title={this.props.title}/>
        <Nav />
        <div className="container">
          <div className="row">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Layout