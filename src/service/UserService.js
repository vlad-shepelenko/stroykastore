import $api from '../http'

export default class UserService {
    static setUserdata(id, name, surname, bday, phone, mail, password) {
        return $api.post('/setUserdata', {id, name, surname, bday, phone, mail, password} )
    }

    static getUserdata(id){
        return $api.post('/getUserdata', {id})
    }
}