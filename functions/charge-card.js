const gifts = require('../content/gifts')
const giftsArray = gifts.gifts
// gifts was returning an object with the gifts array inside of it
// giftsArray let us access those as an array

exports.handler = async (event, context) => {
    // console.log(event.body)
    // console.log('giftsArray', giftsArray)
    const { cart } = JSON.parse(event.body)
    // console.log('node cart', cart)

    const cartWithGifts = cart.map(({ id, qty }) => {
        const gift = giftsArray.find((g) => g.id === id)
        return {
            ...gift,
            qty,
        }
    })

    console.log(cartWithGifts)
    
    // talking to Stripe
    // charging the card 
    return {
        statusCode: 200,
        body: "I have charged that card!",
    }
}