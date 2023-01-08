import $api from '../http'

export default class ProductService {
    static async getSubcategoryProducts(subcategory) {
        console.log(subcategory)
        return $api.post('/getSubcategoryProducts', { subcategory })
    }

    static async getProducts() {
        return $api.get('/getProducts')
    }

    static async getProductById(id) {
        console.log(id)
        return $api.post('/getProductById', { id })
    }

    static async getSearchProducts(name) {
        console.log('name', name)
        return $api.post('/getSearchProduct', { name })
    }

    static async getFilterProducts(minPrice, maxPrice, brands, supplier) {
        return $api.post('/getFilterProducts', { minPrice, maxPrice, brands, supplier })
    }
}