import Route from '@ioc:Adonis/Core/Route'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import MessagingResponse from 'twilio/lib/twiml/MessagingResponse';

Route.get('/', async () => {
  return { hello: 'world' }
})


Route.post('/sms', async ({ response }: HttpContextContract) => {
  const twiml = new MessagingResponse();

  twiml.message('The Robots are coming! Head for the hills!');

  response.type('text/xml').send(twiml.toString());
})
