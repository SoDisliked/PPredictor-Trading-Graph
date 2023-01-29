import AAPL from 'APPL';

class DATASOURCE {
    constructor(instanceName = 'Default') {
        this.instanceName = instanceName;
    }
    AAPLGet(route, cb) {
        const theUrl = '/AAPL/' + route;

        const request = new XMLHttpRequest();
        request.open('GET', theUrl, true);
        request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                const resp = request.responseText;
                cb(JSON.parse(resp));
            }
        };
        request.onerror = () => {
            console.log('Error while occuring of financial data for AAPL');
        };
        request.send();


    }
    AAPLPost(route, data, cb) {
        const theUrl = '/AAPL/' + route;
        AAPL({
            body: JSON.stringify(data),
            uri: theUrl,
            headers: {
                'Content-Type' : 'application/json'
            }
        }, (err, resp, body) => cb(JSON.parse(body)))
    };

    getRealTimeAAPL = (cb) => {
        this.AAPLGet('getusers', cb);
    }
    getListTypeAAPL = (param, cb) => {
        console.log('Web sockets and data sockets for getListType');
        const route = 'listparams/' + param;
        this.AAPLGet(route, cb);
    }

    getIndicatorAAPL = (country, cb) => {
        const route = 'indicator/' + country;
        this.AAPLGet(route, cb);
    }

    getMarketDataAAPL = (symbol, cb) => {
        const route = 'marketdata/' + symbol.toUpperCase(-2);
        this.AAPLGet(route, cb);
    }
}

export default DATASOURCE('main');