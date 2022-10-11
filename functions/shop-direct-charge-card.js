exports.handler = async (event, context) => {
    console.log(event.body)
    // talking to Stripe
    // charging the card
    return {
        statusCode: 200,
        body: "The card has been charged."
    }
}