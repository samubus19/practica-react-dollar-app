const baseUrl = process.env.REACT_APP_DOLARSI_API
console.log(baseUrl)

const routes = {
    getAllDolars  : () => baseUrl,
}

export default routes;