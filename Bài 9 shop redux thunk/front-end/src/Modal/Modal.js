import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import "./Modal.css"
import ModalItem from './ModalItem';
import * as act from '../action/action';

const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  el = document.createElement('div')
  componentDidMount() {
    modalRoot.appendChild(this.el)
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el)
  }
  render() {
    const { carts, offModal } = this.props;
    console.log(carts)
    const total = carts.reduce((sum, item) => sum + item.product.price * item.count, 0)
    return ReactDOM.createPortal(
      <div
        className="blur"
        onClick={offModal}
      >
        <div
          className="modal-container"
        >
          <h3>CHECKOUT</h3>
          {carts.map((item, index) => (<ModalItem
            key={index}
            cart={item}
          />))}
          <div className="modal-total-all">
            <h4 className="title">Total:</h4>
            <h3>{"$ " + total.toFixed(2)}</h3>
          </div>
          <div className="modal-btn-group">
            <div className="modal-btn-pay">
              <button><i className="fab fa-cc-visa"></i></button>
              <button><i className="fab fa-cc-paypal"></i></button>
            </div>
          </div>
        </div>
      </div>,
      this.el,
    )
  }
}
const mapStateToProps = (state) => ({
  carts: state.carts
})

const mapDispatchToProps = dispatch => ({
  offModal: () => {
    dispatch(act.offModal())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)