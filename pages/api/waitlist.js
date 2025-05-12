// Temporary placeholder API to bypass Supabase for deployment
export default function handler(req, res) {
  res.status(200).json({ message: 'API temporarily disabled for deployment.' });
}
