import $ from 'jquery'

export function loadArticleById(id) {
    return $.get(`/api/article/${id}`)
}

export function loadProductById(id) {
    return $.get(`/api/product/${id}`)
}