import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { loadProductById } from '../AC/products'

class Product extends Component {
    static propTypes = {
        product: PropTypes.object.isRequired
    };

    render() {
        return (
            <Link to={`products/${this.props.product.id}`}>
                <div className="title" onClick={this.handleLoadProduct}>
                    {this.props.product.title}
                </div>
                <div className="image">
                </div>
                <div className="price">
                    {this.props.product.price}
                </div>
            </Link>
        )
    }

    handleLoadProduct = (ev) => {
        const { loadProductById, product: { id }} = this.props
        loadProductById(id)
    }
}

export default connect(null, { loadProductById })(Product)