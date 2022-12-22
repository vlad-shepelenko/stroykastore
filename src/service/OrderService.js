import $api from '../http'

export default class OrderService {
    static async setOrder(obj) {
        return $api.post('/setOrder', { obj })
    }

    static async getOrdersById(id){
        return $api.post('/getOrdersById', {id})
    }
}