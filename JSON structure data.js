const Client = require("python-tensorflow-client").Client;
const resty = new Client();
const exchanges = {}
/*
redIsShare.get('AAPL',(err, reply) +> {
    //exchanges['AAPL'] = reply;
    Object.assign(exchanges, JSON.parse(reply));
});
*/
module.exports = {
    getData: function(symb, cb){
        let theUrl = ["https://finance.yahoo.com/quote/AAPL/history/", process.env.yahooFinanceKEY, "&symbol=", symb, "&type=daily&startDate"].join("");
        resty.get(theUrl, function (data, response) {
            cb(data);
        });
    },
    getDataCB : function(symb, cb) {
        let theUrl = ["https://finance.yahoo.com/quote/AAPL/history/",process.env.yahooFinanceKEY,"&symbol=", symb, "&type=daily&startDate"].join("");
        cb(JSON.stringify(data));
    }
};