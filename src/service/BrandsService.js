import $api from "../http";

export default class BrandsService {
    static getBrandsFirstLetter() {
        return $api.get('/getBrandsFirstLetter')
    }

    static getAllBrands() {
        return $api.get('/getAllBrands')
    }

    static getPopularBrands(){
        return $api.get('/getPopularBrands')
    }
}