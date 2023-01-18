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
        return $api.post('/getProductById', { id })
    }

    static async getSearchProducts(name) {

        return $api.post('/getSearchProduct', { name })
    }

    static async getFilterProducts(minPrice, maxPrice, brands, supplier) {
        return $api.post('/getFilterProducts', { minPrice, maxPrice, brands, supplier })
    }

    static async getProductsByCategoryId(id){
        return $api.post('/getProductsByCategoryId', {id})
    }

    static async getPopularProducts(){
        return $api.get('/getPopularProducts')
    }

    static async getProductsByBrandId(id){
        return $api.post('/getProductsByBrandId', {id})
    }

    static async getProductByBrandName(name){
        return $api.post('/getProductByBrandName', {name})
    }
}