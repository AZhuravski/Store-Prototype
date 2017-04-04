import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProductById } from '../AC/products'

class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        return (
            <div>
                <h3 onClick = {this.handleLoadProduct}>{this.props.product.title}</h3>
            </div>
        )
    }

    handleLoadProduct = (ev) => {
        const { loadProductById, product: { id }} = this.props
        loadProductById(id)
    }
}

export default connect(null, { loadProductById })(Product)