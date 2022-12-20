import $api from "../http"

export default class CatalogService {
    static getCatalog() {
        return $api.get('/getSubcategory')
    }
}