import { supabase } from '../../../utils/supabaseClient';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const { error } = await supabase.from('waitlist').insert([{ email }]);

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ message: 'Added to waitlist' });
  }

  res.status(405).json({ error: 'Method not allowed' });
}
