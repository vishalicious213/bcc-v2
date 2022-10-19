// const gifts = require('../content/gifts')
// import gifts from '../content/gifts'

exports.handler = async (event, context) => {
    console.log('event body:', event.body)
    const gifts = require('../content/gifts')
    console.log('gifts:', gifts)
    // const { cart } = JSON.parse(event.body)
    // console.log('cart:', cart)
    // talking to Stripe
    // charging the card
    return {
        statusCode: 200,
        body: "The card has been charged."
    }
}