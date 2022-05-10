import api from "../clients/api"
import routes from "../routes/dolarsiRoutes"

export const getAllDolars = async () => {
    return api.get(routes.getAllDolars())
}
