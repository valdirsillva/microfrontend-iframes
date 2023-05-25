export const getProducts = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Apple iPhone 13 128GB Meia-noite Tela 6,1” 12MP',
            image: 'a57c1ab14765ab0b7ca87de98ba94b94.png',
            price: 'R$ 4.999,00'
        },
        trackingProperties,
    }

    source.postMessage(messageResponse, '*')
}