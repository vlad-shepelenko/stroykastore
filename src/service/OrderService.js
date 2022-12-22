import $api from '../http'

export default class OrderService {
    static async setOrder(obj) {
        return $api.post('/setCart', { obj })
    }
}