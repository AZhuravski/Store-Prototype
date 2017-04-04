import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadAllProducts } from '../AC/products'
import ProductList from '../componentsNew/ProductList'

class ProductListContainer extends Component {
    static propTypes = {

    };

    componentDidMount() {
        this.props.loadAllProducts()
    }

    render() {
        // console.log(this.props.products)
        return <ProductList {...this.props}/>
    }
}

export default connect(state => {
    const { products } = state

    return { products: products.entities, loading: products.loading }
}, {
    loadAllProducts
})(ProductListContainer)