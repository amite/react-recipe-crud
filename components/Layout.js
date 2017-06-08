import React, { Component } from 'react'

import SiteHead from './SiteHead'

class Layout extends Component {
  render () {
    return (
      <div>
        <SiteHead title={this.props.title}/>
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