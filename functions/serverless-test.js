require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

async function getFromAddress() {
    const fromAddress = new api.Address({
        company: 'The Breast Cancer Comfort Foundation',
        street1: '36C West Village Green',
        // street2: '5th Floor',
        city: 'Hicksville',
        state: 'NY',
        zip: '11801',
        phone: '516-622-1917'
    })

    let id = await fromAddress.save().then((res) => {
        return res.id
    })

    return id
}

async function getToAddress() {
    const toAddress = new api.Address({
        name: 'George Costanza',
        company: 'Vandelay Industries',
        street1: '1 E 161st St.',
        city: 'Bronx',
        state: 'NY',
        zip: '10451'
    })
    let id = await toAddress.save().then((res) => {
        return res.id
    })

    return id
}

async function getParcel() {
    const parcel = new api.Parcel({
        length: 9,
        width: 6,
        height: 2,
        weight: 10,
    })

    let id = await parcel.save().then((res) => {
        return res.id
    })

    return id
}

async function getShipment(toAddressId, fromAddressId, parcelId) {
    const shipment = new api.Shipment({
        to_address: toAddressId,
        from_address: fromAddressId,
        parcel: parcelId
    })

    let shippers = await shipment.save().then((res) => {
        console.log('shipment', res)
        return res
    })

    return shippers
}

exports.handler =  async function(event, context) {
    let toAddressId = await getToAddress()
    let fromAddressId = await getFromAddress()
    let parcelId = await getParcel()
    console.log('serverless-test response')
    console.log('toAddressId', toAddressId)
    console.log('fromAddressId', fromAddressId)
    console.log('parcelId', parcelId)
    getShipment(toAddressId, fromAddressId, parcelId)

    return {
        statusCode: 200,
        body: JSON.stringify({
            to_address: toAddressId || 'no to_address data',
            from_address: fromAddressId || 'no from_address data',
            parcel: parcelId || 'no parcel data',
        }),
    }    
}