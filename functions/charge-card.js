const gifts = require('../content/gifts')
// gifts was returning an object with the gifts array inside of it
// giftsArray let us access those as an array
const giftsArray = gifts.gifts
const stripe = require('stripe')(process.env.local.STRIPE_SECRET_KEY)

exports.handler = async (event, context) => {
    // event.body is a string, so we need to parse it into JSON
    const { cart } = JSON.parse(event.body)

    // get id and qty of gifts in cart and match them with pricing data from backend
    const cartWithGifts = cart.map(({ id, qty }) => {
        const gift = giftsArray.find((giftFromArray) => giftFromArray.id === id)
        return {
            ...gift,
            qty,
        }
    })

    // console.log(cartWithGifts)
    
    // talking to Stripe
    const lineItems = cartWithGifts.map(gift => ({
        price_data: {
            currency: "usd",
            product_data: {
                name: gift.name,
            },
            unit_amount: gift.price,
        },
        quantity: gift.qty,
    }))

    // charging the card 
    return {
        statusCode: 200,
        body: "I have charged that card!",
    }
}