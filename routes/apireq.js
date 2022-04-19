const express = require("express");
const https = require('https');
const router = express.Router();

router
    .route("/")
    .post((req, res) =>{
        const query = req.body.currency
        const options = {
            "method": "GET",
            "hostname": "rest.coinapi.io",
            "path": `/v1/assets?filter_asset_id=${query}`,
            "headers": {'X-CoinAPI-Key': '83D0B795-81AC-47B4-AEBE-4EA031C51D6D'}
        };

            const request = https.request(options,response => {
                response.on("data", a => {
                    // res.send(""+a.name, 'is', a.price_usd, 'US Dollars.')
                    const apiResponse = "" + a
                    // console.log(JSON.parse(apiResponse)[0])
                    // console.log(JSON.parse(apiResponse)[0].name)
                    // console.log(JSON.parse(apiResponse)[0].price_usd)
                    try{
                        if (JSON.parse(apiResponse).error != null){
                            res.send(JSON.parse(apiResponse).error)
                        } else {
                            res.send(JSON.parse(apiResponse)[0].name + ' is ' + JSON.parse(apiResponse)[0].price_usd + ' US Dollars!' +
                                '<br><br><br><br>' +
                                '<a href="/APITest">Previous page</a>')
                        }

                    } catch (e) {
                        res.send("Caught error: " + e)
                    }
                });
            });

            request.end();
    })

module.exports = router;


// const a = [
//   {
//     "asset_id": "DOGE",
//     "name": "DogeCoin",
//     "type_is_crypto": 1,
//     "data_quote_start": "2014-07-31T13:05:46.0000000Z",
//     "data_quote_end": "2022-04-13T23:19:19.5682635Z",
//     "data_orderbook_start": "2014-07-31T13:05:46.0000000Z",
//     "data_orderbook_end": "2020-08-05T14:37:58.7197513Z",
//     "data_trade_start": "2014-02-21T05:16:16.8330000Z",
//     "data_trade_end": "2022-04-13T23:18:07.5640000Z",
//     "data_symbols_count": 5289,
//     "volume_1hrs_usd": 239857882.99,
//     "volume_1day_usd": 7698009083930.33,
//     "volume_1mth_usd": 10491662172808.63,
//     "price_usd": 0.1399732755072242193435416033,
//     "id_icon": "63e240f3-047f-41c7-9179-6784bc719f63",
//     "data_start": "2014-02-21",
//     "data_end": "2022-04-13"
//   }
// ]
