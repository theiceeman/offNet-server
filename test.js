const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
  apiKey: '68614ced8748ea7ee8d38157b16ac3ccfbfc7ee2eeaa0335bd5d246c20e90678',
  username: 'sandbox'
});


async function sendSMS() {
  // TODO: Send message
  try {
    const result = await africastalking.SMS.send({
      to: '+2348183175686',
      message: 'Hey AT Ninja! Wassup...',
      from: '56554'
    });
    console.log(result);
  } catch (ex) {
    console.error(ex);
  }
};
sendSMS()
