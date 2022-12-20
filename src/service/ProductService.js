import $api from '../http'

export default class ProductService{
    static async getSubcategoryProducts(subcategory){
        console.log(subcategory)
        return $api.post('/getSubcategoryProducts', {subcategory})
    }

    static async getProductById(id){
        console.log(id)
        return $api.post('/getProductById', {id})
    }
}