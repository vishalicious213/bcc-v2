require('dotenv').config()
const Easypost = require('@easypost/api')
const api = new Easypost(process.env.EASYPOST_TEST_API_KEY)

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

exports.handler =  async function(event, context) {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    // return context.logStreamName
    console.log('serverless-test response')
    // console.log(api)

    return {
        statusCode: 200,
        body: JSON.stringify({
            test: 'SERVERLESS TEST SUCCESSFUL',
            easypost: api,
        }),
    }    
}