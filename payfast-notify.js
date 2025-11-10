export default async function handler(req, res) {
  // PayFast sends POST data here after payment
  console.log('Payment notification:', req.body);
  res.status(200).send('OK');
}