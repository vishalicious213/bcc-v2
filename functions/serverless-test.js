require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

// let parcelId
// let fromAddressId
// let toAddressId

async function getFromAddress() {
    const fromAddress = new api.Address({
        company: 'EasyPost',
        street1: '417 Montgomery Street',
        street2: '5th Floor',
        city: 'San Francisco',
        state: 'CA',
        zip: '94104',
        phone: '415-528-7555'
    });
    // fromAddress.save().then(console.log);
    let id = await fromAddress.save().then((res) => {
        // fromAddressId = res.id
        // console.log('fromAddressId', fromAddressId)
        return res.id
    });

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
    });
    // toAddress.save().then(console.log);
    let id = await toAddress.save().then((res) => {
        // let toAddressId = res.id
        // console.log('toAddressId', toAddressId)
        // return toAddressId
        return res.id
    });

    console.log('id', id)

    return id
}


async function getParcel() {
    const parcel = new api.Parcel({
        length: 9,
        width: 6,
        height: 2,
        weight: 10,
    });
    // parcel.save().then(console.log);
    let id = await parcel.save().then((res) => {
        // let parcelId = res.id
        // console.log('parcelId', parcelId)
        // return parcelId
        return res.id
    });

    // console.log('parcelId outside', parcelId)
    return id
}

exports.handler =  async function(event, context) {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    // return context.logStreamName
    let toAddressId = await getToAddress()
    let fromAddressId = await getFromAddress()
    let parcelId = await getParcel()
    console.log('serverless-test response')
    // console.log('parcelId handler', getParcel())
    // console.log('toAddressId handler', getToAddress())
    // console.log(parcelId, fromAddressId, toAddressId)
    // console.log(parcel)
    // console.log(api)

    return {
        statusCode: 200,
        body: JSON.stringify({
            // test: 'SERVERLESS TEST SUCCESSFUL',
            // easypost: api,
            to_address: toAddressId || 'no data',
            from_address: fromAddressId || 'no data',
            parcel: parcelId,
        }),
    }    
}