import { NewProduct } from '@/src/@types/product';
import { stripe } from '@/src/lib/stripe';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { products, } = req.body as { products: NewProduct[] }

  if (req.method !== 'POST') {
    return res.status(405).json({
      error: 'Method not allowed.'
    })
  }

  if (!products) {
    return res.status(400).json({
      error: 'Products not found.'
    })
  }

  const successUrl = 'http://ignite-shop-by-biancahoffer.vercel.app/success?session_id={CHECKOUT_SESSION_ID}';
  const cancelUrl = 'http://ignite-shop-by-biancahoffer.vercel.app/';

  const checkoutSession = await stripe.checkout.sessions.create({
    mode: 'payment',
    success_url: successUrl,
    cancel_url: cancelUrl,
    line_items: products.map(product => ({
      price: product.defaultPriceId,
      quantity: product.amount,
    }))
  })

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
