import React, { Component } from 'react';
import Products from './Products';
import { connect } from 'react-redux';

import Filter from './Filter';
import SideBar from './SideBar';
import Modal from '../Modal/Modal';


class Page extends Component {
    render() {
        const { showModal } = this.props;
        return (
            <>
                <div className="container">
                    <Filter />
                    <Products/>
                </div>
                <SideBar/>
                {showModal ? <Modal /> : null}
            </>
        )
    }
}
const mapStateToProps = (state) => ({
    showModal: state.showModal
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Page)