const get = async (url) => {
    try {
        const res = await fetch(url)
        return res.json()
   
    } catch (error) {
        throw new Error(error);
    }
}

const api = {
    get  : (url) => get(url),
}

export default api;