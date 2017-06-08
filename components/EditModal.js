import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class EditModal extends Component {
  

  componentDidMount() {
    this.modalTarget = document.createElement('div')
    this.modalTarget.className = 'edit-modal';

    this.bkgEl = document.createElement('div')
    this.bkgEl.className = 'bkg';

    document.body.appendChild(this.bkgEl)
    document.body.appendChild(this.modalTarget)

    setTimeout(() => { this.modalTarget.className += ' expand' }, 5)
    
    this._render()
  }

  componentDidUpdate() {
    this._render()
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget)
    document.body.removeChild(this.modalTarget)    
    document.body.removeChild(this.bkgEl)    
  }

  _render() {
    ReactDOM.render(
      <div>
        {this.props.children}
        <style>{`
          .edit-modal {
            background: white;
            width: 50%;
            top: 50%;
            transform: translate(50%, -50%);
            padding: 30px;
            min-height: 350px;
            border-radius: 5px;
            position: fixed;
            box-shadow: 0px 3px 6px 6px rgba(0, 0, 0, 0.23);
            opacity: 0;            
            transition: all 0.8s ease-in-out;
            padding-bottom: 80px;
          }

          .edit-modal.expand {
            opacity: 1;
          }

          .bkg {
            background: rgba(0, 0, 0, 0.45);
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
          }
        `}</style>
      </div>,
      this.modalTarget
    )
  }

  render() {
    return <noscript />
  }
}

export default EditModal