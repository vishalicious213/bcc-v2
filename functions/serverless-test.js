require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

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

    let id = await fromAddress.save().then((res) => {
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
    let id = await toAddress.save().then((res) => {
        return res.id
    });

    return id
}

async function getParcel() {
    const parcel = new api.Parcel({
        length: 9,
        width: 6,
        height: 2,
        weight: 10,
    });

    let id = await parcel.save().then((res) => {
        return res.id
    });

    return id
}

exports.handler =  async function(event, context) {
    let toAddressId = await getToAddress()
    let fromAddressId = await getFromAddress()
    let parcelId = await getParcel()
    console.log('serverless-test response')

    return {
        statusCode: 200,
        body: JSON.stringify({
            to_address: toAddressId || 'no to_address data',
            from_address: fromAddressId || 'no from_address data',
            parcel: parcelId || 'no parcel data',
        }),
    }    
}