require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

let parcelId
let fromAddressId
let toAddressId

const fromAddress = new api.Address({
    company: 'EasyPost',
    street1: '417 Montgomery Street',
    street2: '5th Floor',
    city: 'San Francisco',
    state: 'CA',
    zip: '94104',
    phone: '415-528-7555'
});
fromAddress.save().then(console.log);

const toAddress = new api.Address({
    name: 'George Costanza',
    company: 'Vandelay Industries',
    street1: '1 E 161st St.',
    city: 'Bronx',
    state: 'NY',
    zip: '10451'
});
toAddress.save().then(console.log);

const parcel = new api.Parcel({
    length: 9,
    width: 6,
    height: 2,
    weight: 10,
});
// parcel.save().then(console.log);
parcel.save().then((res) => {
    parcelId = res.id
    console.log('parcelId', parcelId)
});

exports.handler =  async function(event, context) {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    // return context.logStreamName
    console.log('serverless-test response')
    // console.log(api)

    return {
        statusCode: 200,
        body: JSON.stringify({
            // test: 'SERVERLESS TEST SUCCESSFUL',
            // easypost: api,
            to_address: toAddress,
            from_address: fromAddress,
            parcel: parcel,
        }),
    }    
}