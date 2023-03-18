import { stripe } from '@/src/lib/stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { priceId } = req.body

  if (req.method !== 'POST') {
    5
    return res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  if (!priceId) {
    return res.status(400).json({
      error: 'Price not found.'
    })
  }

  const successUrl = 'http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}';
  const cancelUrl = 'http://localhost:3000/';

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      }
    ]
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
