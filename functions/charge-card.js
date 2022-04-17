const gifts = require('../content/gifts')

exports.handler = async (event, context) => {
    // console.log(event.body)
    console.log(gifts)
    const { cart } = event.body
    // talking to Stripe
    // charging the card 
    return {
        statusCode: 200,
        body: "I have charged that card!",
    }
}