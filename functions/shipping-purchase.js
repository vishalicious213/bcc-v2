require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)
// const gifts = require('../content/gifts')
// const giftsArray = gifts.gifts

async function buyShippingLabel(rateId) {
    console.log('Buy Shipping Label (rateId)', rateId)
    // let shippingLabel = await api.shipment.buy(rateId).then(console.log);

    return shippingLabel
}

exports.handler =  async function(event, context) {
    // let cartData = JSON.parse(event.body)
    // let toAddressId = await getToAddress(cartData.shipTo)
    // let fromAddressId = await getFromAddress()
    // let parcelId = await getParcel(cartData.cart)
    // let carriers = await getShipment(toAddressId, fromAddressId, parcelId)
    
    let bodyTest = JSON.parse(event.body)
    console.log('----- passed in event.body', bodyTest)
    // console.log('passed in labelId', event.body.labelId)
    console.log(bodyTest.labelId)
    // console.log('passed in labelId PARSED', event.body.labelId)
    // let labelinfo = await event.body.labelId
    let labelInfo = bodyTest.labelId
    // let labelInfo = JSON.parse(event.body.labelId)
    console.log('labelInfo', labelInfo)

    // let label = await buyShippingLabel(event.body.labelId)

    return {
        statusCode: 200,
        body: JSON.stringify({
            test: 'this is a test'
            // label : label || 'no label data'
            // label: labelInfo || 'no label data'
            // test: "test"
        }),
    }    
}