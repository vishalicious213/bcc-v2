require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

async function buyShippingLabel(rateId, shipId) {
    console.log('Buy Shipping Label (rateId)', rateId)

    api.Shipment.retrieve(shipId)
    .then((shipment) => {
        shipment.buy(rateId).then((res) => {
            console.log('----- shipping success results', res)
        }).catch((res) => {
            console.log('----- shipping failure results', res)
        })
    })
    .catch(console.log)
}

exports.handler =  async function(event, context) {
    let bodyTest = JSON.parse(event.body)
    let labelInfo = bodyTest.labelId
    let shipInfo = bodyTest.shipId
    let label = await buyShippingLabel(labelInfo, shipInfo)

    return {
        statusCode: 200,
        body: JSON.stringify({
            success: 'gift request received',
            label: label || 'shipping label generated'
        }),
    }    
}