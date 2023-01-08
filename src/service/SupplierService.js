import $api from '../http'

export default class SupplierService {
    static getSuppliers() {
        return $api.get('/getSuppliers')
    }
}