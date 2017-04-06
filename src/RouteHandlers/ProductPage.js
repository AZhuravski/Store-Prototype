import React, { Component, PropTypes } from 'react'
import ProductPage from '../containers/ProductPage'

class ProductPageRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="product-page">
                <ProductPage />
            </div>
        )
    }
}

export default ProductPageRoute