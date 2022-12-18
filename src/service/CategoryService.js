import $api from "../http";

export default class CategoryService {
    static getPopularCategory() {
        return $api.get('/popularCategory')
    }
}