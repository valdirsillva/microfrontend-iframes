export const getProduct = ({ source, trackingProperties }) => {
    const messageResponse = {
        response: {
            name: 'Valdir Sila',
            email: 'valdirpiresba@hotmail.com',

        },
        trackingProperties,
    }

    source.postMessage(messageResponse, '*')
}