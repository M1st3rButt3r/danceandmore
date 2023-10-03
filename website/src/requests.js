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
                    url: baseURL + getMediumImage(rawImage)
                }
                images.push(image);
            }

            let show = {
                id: rawShow.id, 
                title: rawShow.attributes.Title, 
                text: rawShow.attributes.Text,
                year: rawShow.attributes.Year,
                odd: i % 2,
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
        return {
            title: "",
            text: ""
        };
    }
}

async function getOffers() {
    try {
        const data = (await axios.get(baseURL + "/api/offers?populate=*")).data.data;
        let offers = [];
        for (let i = 0; i < data.length; i++) {
            const rawOffer = data[i];
            let offer = {
                id: rawOffer.id, 
                title: rawOffer.attributes.Title, 
                description: rawOffer.attributes.Description,
                coverUrl: baseURL + getMediumImage(rawOffer.attributes.Cover.data),
                link: rawOffer.attributes.Link
            }
            offers.push(offer);
        }
        return offers;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

async function getOfferPage() {
    try {
        const data = (await axios.get(baseURL + "/api/offer-page")).data.data;

        return {
            title: data.attributes.Title,
            text: data.attributes.Text
        }
    }
    catch (err) {
        console.log(err);
        return {
            title: "",
            text: ""
        };
    }
}

async function getNewsPage() {
    try {
        const data = (await axios.get(baseURL + "/api/news-page")).data.data;

        return {
            title: data.attributes.Title,
            text: data.attributes.Text
        }
    }
    catch (err) {
        console.log(err);
        return {
            title: "",
            text: ""
        };
    }
}

async function getNews() {
    try {
        const data = (await axios.get(baseURL + "/api/newss?populate=*")).data.data;
        let newss = [];
        for (let i = 0; i < data.length; i++) {
            const rawNews = data[i];
            let images = [];
            for (let j = 0; j < rawNews.attributes.Images.data.length; j++) {
                const rawImage = rawNews.attributes.Images.data[j];
                let image = {
                    id: rawImage.id,
                    url: baseURL + getMediumImage(rawImage)
                }
                images.push(image);
            }

            let news = {
                id: rawNews.id, 
                title: rawNews.attributes.Title, 
                text: rawNews.attributes.Text,
                date: rawNews.attributes.Date,
                odd: i % 2,
                images
            }
            newss.push(news);
        }
        return newss;
    }
    catch (err) {
        console.log(err);
        return [];
    }
}

function getMediumImage(image){
    if(image.attributes.formats.medium == undefined){
        return getSmallImage(image);
    }
    return image.attributes.formats.medium.url;
}

function getSmallImage(image){
    if(image.attributes.formats.small == undefined){
        return getThumbnailImage(image);
    }
    return image.attributes.formats.small.url;
}

function getThumbnailImage(image) {
    if(image.attributes.formats.thumbnail == undefined){
        return "";
    }
    return image.attributes.formats.thumbnail.url;
}

export {getShows, getShowPage, getOfferPage, getOffers, getNewsPage, getNews};