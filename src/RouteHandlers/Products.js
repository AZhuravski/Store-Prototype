import React, { Component, PropTypes } from 'react'
import ProductList from '../containers/ProductList'

class ProductsRoute extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ProductList />
            </div>
        )
    }
}

export default ProductsRoute