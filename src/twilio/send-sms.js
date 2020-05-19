const config = require('../config')
const client = require('twilio')(config.accountSid, config.authToken)

/**
 * Send an SMS message
 * @param {string} body  - este es el mensaje a enviar
 * @param {string} phone - es el numero de celular
 */

async function sendMessage(body, phone) {
    try {
        const message = await client.messages.create({
            to: phone,
            from: '+13344630988',
            body
        })
        return message;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sendMessage };