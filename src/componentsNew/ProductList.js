import React, { Component, PropTypes } from 'react'
import Product from './Product'

class ProductList extends Component {
    static propTypes = {
        products: PropTypes.array,
        loading: PropTypes.bool
    };

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.products != this.props.products
    }

    render() {
        const { products, loading } = this.props
        if (loading) return <h1>Loading...</h1>
        const items = products.map((product) => <div className="product" key={product.id}><Product {...{ product }}/></div>)
        return (
            <div className="product-list">
                {items}
            </div>
        )
    }
}

export default ProductList