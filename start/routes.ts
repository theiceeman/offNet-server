import Route from '@ioc:Adonis/Core/Route'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse';
// import TwilioSDK from 'twilio';

// const shouldValidate = process.env.NODE_ENV !== 'test';
// +1 656 2163 359

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.post('/sms', async ({ request, response }: HttpContextContract) => {
  console.log({ yyy: request.body })
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  response.type('text/xml').send(twiml.toString());
})
// .middleware([TwilioSDK.webhook({ validate: shouldValidate })])
