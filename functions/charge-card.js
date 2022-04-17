exports.handler = async (event, context) => {
    // talking to Stripe
    // charging the card
    return {
        statusCode: 200,
        body: "I have charged that card!",
    }
}