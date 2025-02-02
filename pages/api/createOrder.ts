import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/sanity/lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const order = await client.create(req.body);
    return res.status(201).json(order);
  } catch (error: unknown) {
    let errorMessage = 'Failed to create order';

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Error creating order:', errorMessage);
    return res.status(500).json({ error: errorMessage });
  }
}
