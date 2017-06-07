
import React, { Component } from 'react'
import Link from 'next/link'

const links = [
  { link: 'Recipes', href: '/'}
]

const renderLinks = (links) =>
  links.map (l =>
    <li key={l.link}>
      <Link href={l.href}>
        <a>{l.link}</a>
      </Link>
    </li>
  )

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-custom">
        <div className="container-fluid">

          <div className="navbar-header page-scroll">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              Menu <i className="fa fa-bars"></i>
            </button>
            <a className="navbar-brand" href="/">React CRUD Recipe App</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              { renderLinks(links) }
            </ul>
          </div>

        </div>
      </nav>
    )
  }
}

export default Nav