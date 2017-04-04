import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadProductById } from '../AC/products'

class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        return (
            <div className="product" >
                <div className="title" onClick={this.handleLoadProduct}>
                    {this.props.product.title}
                </div>
                <div className="image">
                </div>
                <div className="price">
                    {this.props.product.price}
                </div>
            </div>
        )
    }

    handleLoadProduct = (ev) => {
        const { loadProductById, product: { id }} = this.props
        loadProductById(id)
    }
}

export default connect(null, { loadProductById })(Product)