import request from 'superagent';

var ROOT_URL = 'http://localhost:4869';

function getToken() {
    if (localStorage.getItem('token')) {
        return localStorage.getItem('token');
    } else {
        return '';
    }
}

var HttpUtil = {

    get(url, callback){
        request.get(ROOT_URL + url)
            .timeout(30000)
            .set('token', getToken())
            .set('Content-Type', 'application/json; charset=UTF-8')
            .end(function (err, res) {
                if (err) {

                } else {
                    callback(true, res.text);
                }
            });
    },

    post(url, data, callback){
        request.post(ROOT_URL + url)
            .timeout(30000)
            .set('token', getToken())
            .set('Content-Type', 'application/json; charset=UTF-8')
            .send(data)
            .end(function (err, res) {
                if (err) {

                } else {
                    callback(true, res.text);
                }
            });
    },

    put(url, data, callback){
        request.put(ROOT_URL + url)
            .timeout(30000)
            .set('token', getToken())
            .set('Content-Type', 'application/json; charset=UTF-8')
            .send(data)
            .end(function (err, res) {
                if (err) {

                } else {
                    callback(true, res.text);
                }
            });
    },

    delete(url, data, callback){
        request.del(ROOT_URL + url)
            .timeout(30000)
            .set('token', getToken())
            .set('Content-Type', 'application/json; charset=UTF-8')
            .send(data)
            .end(function (err, res) {
                if (err) {

                } else {
                    callback(true, res.text);
                }
            });
    }

};

export default HttpUtil;