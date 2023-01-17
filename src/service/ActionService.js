import $api from '../http'

export default class ActionService{
    static getActions() {
        return $api.get('/getActions')
    }
}