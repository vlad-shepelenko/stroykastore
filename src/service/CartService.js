import $api from '../http'

export default class CartService{
    static async setCart(user, product, count){
        return $api.post('/setCart', {user, product, count})
    }

    static async getCartById(id){
        return $api.post('/getCartById', {id})
    }
}