const axios = require('axios');
const express = require('express');
const Search = express.Router();

Search.get('/search/:parameter', async (req, res) => {
    try {
        const name = req.params.parameter;
        // console.log(name)
        const url = `https://saavn.dev/api/search/songs?query=${name}&page=1&limit=20`;
        let cancelToken = null;
        if (cancelToken) {
            cancelToken.cancel('Operations cancelled due to new request');
        }
        cancelToken = axios.CancelToken.source();

        const response = await axios.get(url);

        const data = response.data;
        const allData = data.data.results;

        const array = allData.map((item, index) => {
            const itemName = item.name;
            const itemArtist = item.primaryArtists;
            const imgLen = item.image.length;
            const imgUrl = item.image[imgLen - 1].link;
            const songLen = item.downloadUrl.length;
            const songUrl = item.downloadUrl[songLen - 1].link;
            const uniqueId=item.id
            return {
                id: index,
                Name: itemName,
                Artist: itemArtist,
                YTID: "",
                Url: imgUrl,
                SongUrl: songUrl,
                uniqueId:uniqueId
            };
        });

        res.send(array);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = Search;
