exports.handler =  async function(event, context) {
    // console.log("EVENT: \n" + JSON.stringify(event, null, 2))
    // return context.logStreamName
    console.log('serverless-test response')

    return {
        statusCode: 200,
        body: JSON.stringify({
            test: 'SERVERLESS TEST SUCCESSFUL',
        }),
    }    
}