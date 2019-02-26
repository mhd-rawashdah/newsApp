const request = require('request');


const getNewsFromApi = (callback) => {
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1355006627464de1bea55e1cd7420d1c";
    request.get(url, (err, res, body) => {
        if (err) {
            console.log('Erorr during get data from Api\n' + err)
            callback(err, null);
        } else {
            callback(null, JSON.parse(body));
        }
    })
}


exports.getNewsFromApi = getNewsFromApi;