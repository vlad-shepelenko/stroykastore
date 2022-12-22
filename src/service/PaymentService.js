import $api from "../http";

export default class PaymentService {
    static getConfig() {
        return $api.get('/config');
    }

    static createPayment(price) {
        return $api.post('/createPayment', { price })
    }
}