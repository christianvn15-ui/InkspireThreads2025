export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const { name, amount } = req.body;

  const merchant_id = 'YOUR_MERCHANT_ID';
  const merchant_key = 'YOUR_MERCHANT_KEY';
  const return_url = 'https://inkspire-threads2025.vercel.app/success';
  const cancel_url = 'https://inkspire-threads2025.vercel.app/cancel';
  const notify_url = 'https://inkspire-threads2025.vercel.app/api/payfast-notify';

  const data = {
    merchant_id,
    merchant_key,
    return_url,
    cancel_url,
    notify_url,
    amount,
    item_name: `Order from ${name}`,
    payment_method: 'eft',
  };

  // Build query string
  const query = Object.entries(data)
    .map(([key, val]) => `${key}=${encodeURIComponent(val)}`)
    .join('&');

  res.redirect(`https://www.payfast.co.za/eng/process?${query}`);
}