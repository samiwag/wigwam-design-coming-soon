
module.exports = {
    twilio: {
        accountSID:process.env.TWILIO_ACCOUNT_SID,
        authToken:process.env.TWILIO_AUTH_TOKEN,
        numbers: {
            contact:process.env.TWILIO_NUMBER_CONTACT
        },
        notify:{
            sam:process.env.TWILIO_NOTIFY_SAM,
            rob:process.env.TWILIO_NOTIFY_ROB,
            default:process.env.TWILIO_NOTIFY_DEFAULT
        }
    }
};
