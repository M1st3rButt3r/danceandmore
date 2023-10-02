const axios = require('axios').default;
const baseURL = "http://127.0.0.1:1337";

async function getShows() {
    try {
        const data = (await axios.get(baseURL + "/api/shows?populate=*")).data.data;
        let shows = [];
        for (let i = 0; i < data.length; i++) {
            const rawShow = data[i];
            let images = [];
            for (let j = 0; j < rawShow.attributes.Images.data.length; j++) {
                const rawImage = rawShow.attributes.Images.data[j];
                let image = {
                    id: rawImage.id,
                    url: baseURL + rawImage.attributes.formats.medium.url
                }
                images.push(image);
            }

            let show = {
                id: rawShow.id, 
                title: rawShow.attributes.Title, 
                text: rawShow.attributes.Text,
                year: rawShow.attributes.Year,
                images
            }
            shows.push(show);
        }
        return shows;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

async function getShowPage() {
    try {
        const data = (await axios.get(baseURL + "/api/show-page")).data.data;

        return {
            title: data.attributes.Title,
            text: data.attributes.Text
        }
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

export {getShows, getShowPage};