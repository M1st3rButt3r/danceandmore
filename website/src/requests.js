const axios = require('axios').default;
const baseURL = "http://127.0.0.1:1337/api";

async function getShows() {
    try {
        const shows = (await axios.get(baseURL + "/shows?populate=*")).data.data;
        return shows;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

export default getShows;